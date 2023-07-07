import Image from 'next/image';
import styles from '../../../styles/Home.module.css'
import useTranslation from '../../hooks/useTranslation';
import RatingsBooking from './RatingsBooking';

function Avaliacoes(ratings) {
  const {t} = useTranslation();

  return (
    <div className={styles.main}>
      <h2 className={styles.sub_title}>
      {t('avaliacoes')}
      </h2>
      {!ratings ? 'ratings' : <RatingsBooking/>}    
    </div>
    );
}

export default Avaliacoes;


// não usei a API do Booking, pois eles limitam e um parceiro ja a esta consumindo.