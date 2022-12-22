import styles from '../../../styles/Home.module.css'
import { handleRedirect } from '../../helpers';
import useTranslation from '../../hooks/useTranslation';

export default function BookNowButton() {
  const {t} = useTranslation();

  return (
    <button className={styles.button_booknow} 
      onClick={() => handleRedirect('https://hbook.hsystem.com.br/Booking?companyId=632b13f5e819f634133f8f8a')}>
      <h3>{t('reserve_button')}</h3>
    </button>
  );
}
