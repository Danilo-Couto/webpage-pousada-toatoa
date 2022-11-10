import styles from '../../../styles/Home.module.css'
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import Localizacao from '../../components/Localizacao/localizacao';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <Localizacao/>
      <Footer/>
    </div>
  );
}