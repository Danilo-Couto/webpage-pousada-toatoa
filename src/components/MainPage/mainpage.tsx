import styles from '../../../styles/Home.module.css'
import Avaliacoes from '../Avaliacoes/avaliacoes';
import Instagram from '../Instagram/instagram';
import Intro from '../Intro/intro';
import Localizacao from '../Localizacao/localizacao';
import Otas from '../Otas/otas';
import Quartos from '../Quartos/quartos';


export default function MainPage({feed}) {
  return (
    <main className={styles.main}>
      <Intro />
      <Quartos />
      <Instagram feed={feed} />
      <Localizacao />
      <Avaliacoes />
      <Otas />
      </main> 
  );
}
