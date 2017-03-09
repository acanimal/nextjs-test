import React from 'react';
import { FormattedMessage } from 'react-intl';
import Link from 'next/link';

// TODO - Move styles to styled-components

export default () => (
  <nav>
    <li>
      <Link href="/">
        <a><FormattedMessage id="nav.home" /></a>
      </Link>
    </li>
    <li>
      <Link href="/about">
        <a><FormattedMessage id="nav.about" /></a>
      </Link>
    </li>

    <style jsx>{`
      nav {
        display: flex;
      }
      li {
        list-style: none;
        margin-right: 1rem;
      }
    `}</style>
  </nav>
);
