import styles from '../../../styles/Home.module.css'

function Instagram({feed}) {
  // console.log(feed)

  return (
    <>
    <h2 className={styles.sub_title}>@TOATOA_PIPA</h2>
    <div className={styles.grid}>
      <div>
        {feed.slice(0, 4).map((obj, key) => {
          return (
              <a
                key={key}
                href={obj.media_url}
                aria-label="view image on Instagram"
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
      </div>
    </div>
    </>
    );
}

export default Instagram;
