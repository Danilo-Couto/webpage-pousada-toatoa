import styles from '../../../styles/Home.module.css'

function Feed(feed) {
  return feed.slice(0, 8).map((obj, key) => {
    return (
      <a
        className={styles.sub_title} 
        key={key}
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
    )
  })
}

function Instagram({feed}) {
  return (
    <div className={styles.main}>
      <h2 className={styles.sub_title}>@TOATOA_PIPA</h2>
      <a />
      <div className={styles.grid}>
        {feed == null ? <p></p> : Feed(feed) }    
      </div>
    </div>
  );
}

export default Instagram;
