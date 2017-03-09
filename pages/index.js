import React from 'react';
import { FormattedMessage, FormattedNumber, intlShape } from 'react-intl';
import Head from 'next/head';
import pageWithIntl from '../components/PageWithIntl';
import Layout from '../components/Layout';

const Index = ({ intl }) => (
  <Layout>
    <Head>
      <meta name="description" content={intl.formatMessage({ id: 'html.description' })} />
    </Head>
    <p>
      <FormattedMessage id="greeting" />
    </p>
    <p>
      <FormattedNumber value={1000} />
    </p>
  </Layout>
);

Index.propTypes = {
  intl: intlShape.isRequired,
};

export default pageWithIntl(Index);
