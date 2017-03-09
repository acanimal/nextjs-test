// Polyfill Node with `Intl` that has data for all locales.
// See: https://formatjs.io/guides/runtime-environments/#server
const IntlPolyfill = require('intl');

Intl.NumberFormat = IntlPolyfill.NumberFormat;
Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;

const { readFileSync } = require('fs');
const { basename } = require('path');
const { createServer } = require('http');
const accepts = require('accepts');
const glob = require('glob');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const localeDataCache = new Map();

// Get the supported languages by looking for translations in the `lang/` dir.
const languages = glob.sync('./lang/*.json').map(f => basename(f, '.json'));

// Load React Intl's locale data on the request for the user's locale.
// This function will also cache the scripts by lang in memory.
const getLocaleDataScript = (locale) => {
  const lang = locale.split('-')[0];

  if (!localeDataCache.has(lang)) {
    const localeDataFile = require.resolve(`react-intl/locale-data/${lang}`);
    const localeDataScript = readFileSync(localeDataFile, 'utf8');

    localeDataCache.set(lang, localeDataScript);
  }

  return localeDataCache.get(lang);
};

// Load and expose the translations on the request for the user's locale.
const getMessages = locale => require(`./lang/${locale}.json`);  // eslint-disable-line global-require, import/no-dynamic-require

app.prepare().then(() => {
  createServer((req, res) => {
    const accept = accepts(req);
    const locale = accept.language(languages);

    // TODO - This is run for all requests. We need to load locale and messages only for pages.

    /* eslint-disable no-param-reassign */
    req.locale = locale;
    req.localeDataScript = getLocaleDataScript(locale);
    req.messages = getMessages(locale);
    /* eslint-enable no-param-reassign */

    handle(req, res);
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log('> Read on http://localhost:3000');
  });
});
