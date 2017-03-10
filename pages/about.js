import React, { Component } from 'react';
import { FormattedRelative } from 'react-intl';
import pageWithReduxAndIntl from '../container/PageWithReduxAndIntl';
import Layout from '../components/Layout';

class About extends Component {
  static async getInitialProps() {
    return { someDate: Date.now() };
  }

  render() {
    return (
      <Layout>
        <p>
          <FormattedRelative
            value={this.props.someDate}
            updateInterval={1000}
          />
        </p>
      </Layout>
    );
  }
}

About.propTypes = {
  someDate: React.PropTypes.number.isRequired,
};

export default pageWithReduxAndIntl(About);
