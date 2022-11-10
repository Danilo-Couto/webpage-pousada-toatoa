import styles from '../../../styles/Home.module.css'
import { otas } from '../../consts/otas';
import { handleRedirect } from '../../helpers';

export default function BookNowButton() {
  return (
    <button className={styles.button_booknow} 
      onClick={() => handleRedirect(otas.airbnb)}>
      <h3>RESERVE JÁ</h3>
    </button>
  );
}
