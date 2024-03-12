import ThemeProvider, { initTheme } from 'client/utils/xTheme'
import Head from 'next/head'

import 'client/styles/framework.scss'
import 'client/styles/main.scss'

initTheme()

function App(props) {
  const { Component, pageProps } = props

  return (
    <>
      <ThemeProvider>
        <Head>
          <meta name="renderer" content="webkit" />
          <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no, viewport-fit=cover" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

          {/* Special Fix */}
          <meta name="format-detection" content="telephone=no" />
          <meta name="msapplication-tap-highlight" content="no" />

          {/* Default Icon */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="SHORTCUT ICON" href="/favicon.ico" />

          <title>Next.js Turbo Scss Demo</title>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
