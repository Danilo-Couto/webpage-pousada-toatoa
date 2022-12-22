import styles from '../../../styles/Home.module.css'
import useTranslation from '../../hooks/useTranslation';
import BookNowButton from '../Buttons/bookNow';
import OtasButton from '../Buttons/otas';
function Otas() {
  const {t} = useTranslation();

  return (
    <div className={styles.main}>
      <h2 className={styles.sub_title}
        >{t('otas')}
      </h2>
      <div className={styles.otas}>
        <h3 className={styles.description}>
        {t('otas_descricao')}
        </h3>
        <BookNowButton/>
        <OtasButton/>
      </div>
    </div>
  );
}

export default Otas;
