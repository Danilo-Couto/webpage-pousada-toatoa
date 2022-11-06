import styles from '../../../styles/Home.module.css'
import { handleRedirect } from '../../helpers';

function Quarto({quarto}) {
  return (
    <div >
      <div className={styles.room}>
        <h1>{quarto.title}</h1>
        <h2>{quarto.subtitulo}</h2>
        <p>{quarto.description}</p>
        <p>{quarto.subDescription}</p>
        <ul>
          {quarto.items.map((item, i) => 
          <li key={i}> {item} </li>)}
        </ul>
        <button
          className={styles.button_booknow}
          onClick={() => handleRedirect(quarto.book)}
        >
            RESERVAR ESTE
        </button>
      </div>

      <div className={styles.grid}>
      {quarto.src.images.map((item, i) => 
        <img
        key={i}
        src={item}
        alt={quarto.title}
        className={styles.img_feed}
        />
      )}        
      </div>      
    </div>
  );
}

export default Quarto;
