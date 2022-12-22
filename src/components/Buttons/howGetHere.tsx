import Link from 'next/link';
import styles from '../../../styles/Home.module.css'
import useTranslation from '../../hooks/useTranslation';

export default function ButtonHowGetHere() {
  const {t} = useTranslation();

  return (
    <Link
      className={styles.button_drive}
      href='/como_chegar'
    >{t('botao_como_chegar')}
    </Link>
  );
}