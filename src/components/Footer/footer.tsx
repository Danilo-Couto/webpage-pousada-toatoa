import styles from '../../../styles/Home.module.css'
import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiFillFacebook
} from 'react-icons/ai';
import { handleRedirect, handleScrollTop } from '../../helpers';

export default function Footer() {
  return (
  <div className={styles.footer}>
    <section className={styles.icons}>
      <AiOutlineInstagram
        className={styles.logo}
        onClick={() => handleRedirect('https://instagram.com/toatoa_pipa')}
      />
      <AiFillFacebook 
        className={styles.logo}
        onClick={() =>
          handleRedirect('https://www.facebook.com/HospedariaToaToaEmPipa')
        } 
      />
      <a href="#">
      </a>
    </section>
    <span>
      Pousada Toa Toa Em Pipa - Rua Praia do Amor, 48 B
    </span> 
    <button className={styles.back_to_top} type="button" onClick={handleScrollTop}>
      Back to the Top
    </button>
</div>

  );
}
