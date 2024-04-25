import Avaliacoes from '../Avaliacoes/avaliacoes';
import Banner from '../Banner/banner';
import HBook from '../HBook/HBook';
import Instagram from '../Instagram/instagram';
import Intro from '../Intro/intro';
import Localizacao from '../Localizacao/localizacao';
import Otas from '../Otas/otas';
import Quartos from '../Quartos/quartos';

export default function MainPage({quartos, feed}) {
  return (
    <main>
      <Intro />
      {/* <HBook/> */}
      <Quartos quartos = {quartos}/>
      <Avaliacoes />
      <Localizacao />
      <Otas />
      <Instagram feed = {feed} />
      <Banner />
      </main> 
  );
}

