import styles from '../../../styles/Home.module.css'
import { otas } from '../../consts/otas';

export default function OtasButton() {
  return (
    <div className={styles.grid}>
        <a href={otas.airbnb} className={styles.card} target="_blank" rel="noreferrer">
            <p> AIRBNB</p>
        </a>
        <a href={otas.booking} className={styles.card} target="_blank" rel="noreferrer">
            <p> BOOKING</p>
        </a>
        <a href={otas.expedia} className={styles.card} target="_blank" rel="noreferrer">
            <p> EXPEDIA</p>
        </a>
        <a href={otas.hostelword} className={styles.card} target="_blank" rel="noreferrer">
            <p> HOSTELWORLD</p>
        </a>
    </div>
  );
}
