import styles from '../../../styles/Home.module.css'
import {
  AiOutlineWhatsApp,
} from 'react-icons/ai';
import { handleRedirect, handleScrollTop } from '../../helpers';
import Link from 'next/link';

export default function Footer() {

  const message = `Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20fazer%20uma%20reserva.`
      
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
    <Link href="/reservas">
      <AiOutlineWhatsApp className={styles.whats_float}>
      </AiOutlineWhatsApp>
    </Link>
    </section>
    <button className={styles.back_to_top} type="button" onClick={handleScrollTop}>
      De volta ao Topo
    </button>
</div>

  );
}
