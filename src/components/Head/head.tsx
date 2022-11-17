import Head from 'next/head';

function HeadMain() {
  return (
    <Head>
    <title>Pousada Toa Toa Em Pipa</title>
    <meta
     name="Sua hospedagem na Praia de Pipa RN"
     content="Suítes e quartos privativos a 50 metros da Praia do Amor e 500 m do centro de Pipa"
    />
    <meta property="og:title" content="Pousada Toa Toa Em Pipa" />
    <meta
    property="og:description"
    content="Sua hospedagem na Praia de Pipa RN"
    />
    <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default HeadMain;
