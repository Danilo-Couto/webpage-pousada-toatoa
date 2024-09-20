import Link from 'next/link';
import styles from '../../../styles/Home.module.css'
import { handleRedirect } from '../../helpers';
import useTranslation from '../../hooks/useTranslation';

export default function BookNowButton() {
  const {t} = useTranslation();

  return (
    <button className={styles.button_booknow} >
      <Link href="/reservas"> 
        <h3>{t('reservas')}</h3>
      </Link>    
    </button>
  );
}