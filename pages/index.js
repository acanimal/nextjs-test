import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'

const Zone = styled.div`
  background-color: green
`

const App = ({ children, title = '' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' rel='stylesheet' />
    </Head>
    <header>
      <nav>
        <Link href='/'><a>Home</a></Link> |
        <Link href='/about'><a>About</a></Link> |
        <Link href='/contact'><a>Contact</a></Link>
      </nav>
    </header>

    <Zone>
      { children }
    </Zone>

    <footer>
      Footer
    </footer>
  </div>
)

export default () => (
  <App>
    Nothing to show
  </App>
)
