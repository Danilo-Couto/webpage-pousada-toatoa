import styles from '../../../styles/Home.module.css'
import { handleRedirect } from '../../helpers';

export default function BlablacarButton() {
  return (
    <button className={styles.button_blablacar}
      onClick={() => handleRedirect('https://www.blablacar.com.br/')}>
      <h3>BLABLA CAR</h3>
    </button>
  );
}
