import React from 'react';
import { injectIntl } from 'react-intl';
import Head from 'next/head';
import Nav from './Nav';

export default injectIntl(({ intl, children }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{intl.formatMessage({ id: 'html.title' })}</title>
    </Head>

    <header>
      <Nav />
    </header>

    {children}

  </div>
));
