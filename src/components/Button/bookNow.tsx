import styles from '../../../styles/Home.module.css'
import { handleRedirect } from '../../helpers';

export default function BookNowButton() {
  return (
    <button className={styles.button_booknow} 
      onClick={() => handleRedirect('https://wa.me/message/P7Y6BQIEU6KTO1')}>
      <h3>RESERVE JÁ</h3>
    </button>
  );
}
