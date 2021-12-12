import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GlobalStyleSheet } from '../styles/GlobalStyleSheet'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyleSheet />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
