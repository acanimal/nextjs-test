import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import styleSheet from 'styled-components/lib/models/StyleSheet';

// The document (which is SSR-only) needs to be customized to:
// - expose the locale data for the user's locale for React Intl to work in the browser.
// - build styles on server side
export default class IntlDocument extends Document {
  static async getInitialProps(context) {
    const props = await super.getInitialProps(context);
    const { req: { localeDataScript, locale } } = context;
    const page = context.renderPage();
    /* eslint-disable react/no-danger */
    const styles = (
      <style dangerouslySetInnerHTML={{ __html: styleSheet.rules().map(rule => rule.cssText).join('\n') }} />
    );
    /* eslint-enable react/no-danger */

    return {
      ...props,
      localeDataScript,
      locale,
      page,
      styles,
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
