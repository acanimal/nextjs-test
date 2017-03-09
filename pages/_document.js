import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

// The document (which is SSR-only) needs to be customized to expose the locale
// data for the user's locale for React Intl to work in the browser.
export default class IntlDocument extends Document {
  static async getInitialProps(context) {
    const props = await super.getInitialProps(context);
    const { req: { localeDataScript, locale } } = context;
    return {
      ...props,
      localeDataScript,
      locale,
    };
  }

  render() {
    const locale = this.props.locale;

    return (
      <html lang={locale}>
        <Head />
        <body>
          <Main />
          <script
            dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
              __html: this.props.localeDataScript,
            }}
          />
          <NextScript />
        </body>
      </html>
    );
  }
}
