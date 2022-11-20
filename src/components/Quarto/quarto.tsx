import Image from 'next/image';
import styles from '../../../styles/Home.module.css'
import { handleRedirect } from '../../helpers';

function Quarto({quarto}) {
  return (
    <div className={styles.grid}>
      <div className={styles.main_room}>
        <h1>{quarto.title}</h1>
        <h2>{quarto.subtitulo}</h2>
        <p>{quarto.description}</p>
        <p>{quarto.subDescription}</p>
        <div className={styles.grid_room}>
          <ul>
            {quarto.items.map((item, i) => 
            <li key={i}> {item} </li>)}
          </ul>
          <button
            className={styles.button_booknow}
            onClick={() => handleRedirect(quarto.book)}
            > RESERVAR ESTE
          </button>
          <div></div>
        </div>        
      </div>
      <div >
        <Image
          width={600}
          height={400}
          className={styles.room_img}
          src={quarto.src.cover}
          alt={quarto.title}
        />
      </div>
      <div className={styles.grid_img_room}>
        {quarto.src.images.map((item, i) => 
          <Image
            width={600}
            height={400}
            key={i}
            src={item}
            alt={quarto.title}
            className={styles.img_galery}
          />
        )}        
      </div>
    </div>
  );
}

export default Quarto;
