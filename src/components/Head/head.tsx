import Head from 'next/head';
import Script from 'next/script';

function HeadMain() {
  return (
    <div>
      <Head>
        <title>Pousada Toa Toa Em Pipa</title>
        <meta
          name="description"
          content="Sua hospedagem na Praia de Pipa RN: Suítes e quartos privativos a 50 metros da Praia do Amor e 500 m do centro de Pipa" />
        <meta property="og:title" content="Pousada Toa Toa Em Pipa" />
        <meta
          property="og:description"
          content="Sua hospedagem na Praia de Pipa RN" />
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

export default HeadMain;
