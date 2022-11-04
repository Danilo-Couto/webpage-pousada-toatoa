import styles from '../../../styles/Home.module.css'
import Image from 'next/image'

function Quarto({quarto}) {
  return (
    <div className={styles.grid}>
      <div className={styles.main_rooms}>
        <h1>{quarto.title}</h1>
        <h2>{quarto.subtitulo}</h2>
        <p>{quarto.description}</p>
        <p>{quarto.subDescription}</p>
        <ul>
          {quarto.items.map((item, i) => 
          <li key={i}> {item} </li>)}
        </ul>
        <Image
        src={quarto.src}
        alt={quarto.title}
        className={styles.rooms}
        />
      </div>
  </div>
  );
}

export default Quarto;
