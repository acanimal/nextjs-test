import React from 'react';
import { FormattedMessage, FormattedNumber, intlShape } from 'react-intl';
import Head from 'next/head';
import styled from 'styled-components';
import pageWithReduxAndIntl from '../container/PageWithReduxAndIntl';
import Layout from '../components/Layout';

const Label = styled.span`
  background: red;
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Index = ({ intl }) => (
  <Layout>
    <Head>
      <meta name="description" content={intl.formatMessage({ id: 'html.description' })} />
    </Head>
    <p>
      <FormattedMessage id="greeting" />
    </p>
    <div>
      <Label>some label here</Label>
      <Wrapper>
        <FormattedNumber value={1000} />
      </Wrapper>
    </div>
  </Layout>
);

Index.propTypes = {
  intl: intlShape.isRequired,
};

export default pageWithReduxAndIntl(Index);
