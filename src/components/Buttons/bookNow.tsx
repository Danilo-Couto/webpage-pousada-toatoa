import styles from '../../../styles/Home.module.css'
import { otas } from '../../consts/otas';
import { handleRedirect } from '../../helpers';

export default function BookNowButton() {
  return (
    <button className={styles.button_booknow} 
      onClick={() => handleRedirect('https://hbook.hsystem.com.br/Booking?companyId=632b13f5e819f634133f8f8a')}>
      <h3>RESERVE JÁ</h3>
    </button>
  );
}
