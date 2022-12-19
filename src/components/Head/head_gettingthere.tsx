import Head from 'next/head';
import Script from 'next/script';

function HeadGettingHere() {
  return (
    <div>
      <Head>
      <title>Como chegar em Pipa</title>
      <meta
      name="description"
      content="Saiba como vir de carro, onibus, van, táxi ou carona para Praia da Pipa."
      />
      <link rel="icon" href="/favicon.ico" />
      </Head>
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KRG7X8VKPK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-KRG7X8VKPK');
        `}
      </Script>
      {/* <!-- Google Tag Manager --> */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PGZ5JSF')
        `}
      </Script>
      {/* <!-- End Google Tag Manager --> */}

    </div>
  );
}

export default HeadGettingHere;
