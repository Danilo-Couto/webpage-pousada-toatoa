import Image from 'next/image';
import styles from '../../../styles/Home.module.css'
import RatingsBooking from './RatingsBooking';

function Avaliacoes(ratings) {
  return (
    <div className={styles.main}>
      <h2 className={styles.sub_title}>AVALIAÇÕES</h2>
      {!ratings ? 'ratings' : <RatingsBooking/>}    
    </div>
    );
}

export default Avaliacoes;
