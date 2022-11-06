import styles from '../../../styles/Home.module.css'
import RatingsBooking from './booking';

function Avaliacoes(ratings) {
  return (
    <div className={styles.main}>
      <h2 className={styles.sub_title}>AVALIAÇÕES</h2>
      <div className={styles.grid}>
        <div>
          {!ratings ? 'ratings' : <RatingsBooking/>}    
        </div>
      </div>
    </div>
    );
}

export default Avaliacoes;
