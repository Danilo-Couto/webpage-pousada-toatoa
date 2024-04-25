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
      <a href="#">
      </a>
    </section>
    <span>
      Pousada Toa Toa Em Pipa - Rua Praia do Amor, 48 B
    </span> 
    <section>
      <AiOutlineWhatsApp 
        className={styles.whats_float}
        onClick={() => handleRedirect("https://wa.me/5584996250055")}
      />
    </section>
    <button className={styles.back_to_top} type="button" onClick={handleScrollTop}>
      De volta ao Topo
    </button>
</div>

  );
}
