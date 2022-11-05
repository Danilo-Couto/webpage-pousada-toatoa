import { AiOutlineWhatsApp } from 'react-icons/ai';
import styles from '../../../styles/Home.module.css'
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import { handleRedirect } from '../../helpers';

export default function Reservas() {
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.main}>
        <h2 className={styles.sub_title}>
          Reservas direto pelo whatsapp 19 997484772
        </h2>
        <AiOutlineWhatsApp
          className={styles.logo}
          onClick={() =>
            handleRedirect('https://wa.me/message/P7Y6BQIEU6KTO1')
          }
        />
      </div>
      <Footer/>
    </div>
  );
}
