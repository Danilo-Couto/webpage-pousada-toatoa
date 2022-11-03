import Avaliacoes from '../Avaliacoes/avaliacoes';
import Instagram from '../Instagram/instagram';
import Intro from '../Intro/intro';
import Localizacao from '../Localizacao/localizacao';
import Otas from '../Otas/otas';
import Quartos from '../Quartos/quartos';

export default function MainPage({quartos}) {
  return (
    <main>
      <Intro />
      <Quartos quartos = {quartos}/>
      <Instagram />
      <Localizacao />
      <Avaliacoes />
      <Otas />
      </main> 
  );
}