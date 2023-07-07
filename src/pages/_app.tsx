import '../../styles/globals.css'
import { LanguageProvider } from '../context/LanguageContext'

function MyApp({ Component, pageProps }) {

  return (
  <>
    {/* <!-- Google Tag Manager (noscript) --> */}
    <noscript
      dangerouslySetInnerHTML={{
      __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PGZ5JSF" height="0" width="0" style="display:none;visibility:hidden;" />`,
      }}
    />
    {/* <!-- End Google Tag Manager (noscript) --> */}
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
    </>
  )
}

export default MyApp
