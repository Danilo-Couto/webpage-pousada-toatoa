import Image from 'next/image';
import styles from '../../../styles/Home.module.css'

function RatingsBooking() {
  return (
    <div className={styles.main_ratings}>
      <Image
        src='/nota booking.png'
        alt="Nota Toa Toa Em Pipa"
        width={225}
        height={100}
      />
      <Image
        src='/notas_detalhes.png'
        alt="Nota Toa Toa Em Pipa"
        width={1000}
        height={250}
      />
    </div>
    );
}

export default RatingsBooking;
