import Image from 'next/image';
import styles from '../../../styles/Home.module.css'

function RatingsBooking() {
  return (
    <div className={styles.grid}>
      <Image
          src='/nota booking.png'
          alt="Nota Toa Toa Em Pipa"
          width={300}
          height={100}
        />
      <Image
        src='/notas_detalhes.png'
        alt="Nota Toa Toa Em Pipa"
        width={1200}
        height={400}
      />
    </div>
    );
}

export default RatingsBooking;
