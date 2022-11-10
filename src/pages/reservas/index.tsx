import { AiOutlineWhatsApp } from 'react-icons/ai';
import styles from '../../../styles/Home.module.css'
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import Otas from '../../components/Otas/otas';
import { handleRedirect } from '../../helpers';

export default function Reservas() {
  return (
    <div className={styles.container}>
      <Header/>
        <Otas/>
      <Footer/>
    </div>
  );
}
