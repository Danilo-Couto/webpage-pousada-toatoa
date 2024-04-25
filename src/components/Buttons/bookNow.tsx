import styles from '../../../styles/Home.module.css'
import { handleRedirect } from '../../helpers';
import useTranslation from '../../hooks/useTranslation';

export default function BookNowButton() {
  const {t} = useTranslation();

  return (
    <button className={styles.button_booknow} 
    onClick={() => handleRedirect("https://wa.me/5584996250055")}>
      <h3>{t('reserve_button')}</h3>
    </button>
  );
}
