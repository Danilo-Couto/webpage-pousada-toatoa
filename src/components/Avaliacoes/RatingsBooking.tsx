import Image from 'next/image';
import styles from '../../../styles/Home.module.css'

function RatingsBooking() {
  return (
    <div className={styles.main_ratings}>
      <Image
        src='/nota booking.jpg'
        alt="Nota Toa Toa Em Pipa"
        width={225}
        height={100}
      />
      <Image
        src='/notas_detalhes.jpg'
        alt="Nota Toa Toa Em Pipa"
        width={1000}
        height={250}
        className={styles.img_main}
      />
    </div>
    );
}

export default RatingsBooking;
