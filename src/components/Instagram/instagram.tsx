import { AiOutlineInstagram } from 'react-icons/ai';
import styles from '../../../styles/Home.module.css'
import { handleRedirect } from '../../helpers';

function Feed(feed) {
  return feed.slice(0, 8).map((obj, key) => {
    return (
      <div 
        className={styles.grid_room}
        key={key}
      >
        <a
          className={styles.sub_title} 
          href='https://www.instagram.com/toatoa_pipa/' 
          target="_blank"
          aria-label="view image on Instagram" rel="noreferrer"
        >
          <img
            className={styles.img_feed}
            src={obj.media_url}
            alt={obj.id}
            />
        </a>
      </div>

    )
  })
}

function Instagram({feed}) {
  return (
    <div className={styles.main}>
      <h2 className={styles.sub_title}>INSTAGRAM</h2>
        {feed == null ? 
        <div className={styles.grid}>
          <AiOutlineInstagram
            className={styles.icons}
            onClick={() => handleRedirect('https://instagram.com/toatoa_pipa')}
          />
          <p>@TOATOA_PIPA</p>
        </div> 
       :
       <div className={styles.grid}>
        {Feed(feed )} 
      </div>
       }    
    </div>
  );
}

export default Instagram;
