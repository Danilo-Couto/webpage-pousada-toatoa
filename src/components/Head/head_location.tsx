import Head from 'next/head';
import Script from 'next/script';

function HeadLocation() {
  return (
    <div>
      <Head>
      <title>Pousada Perto da Praia e do Centro de PIPA</title>
      <meta
        name="description"
        content="Estamos a 50 METROS DA PRAIA DO AMOR E 500 METROS DO CENTRO DE PIPA!"
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
    </div>
  );
}

export default HeadLocation;
