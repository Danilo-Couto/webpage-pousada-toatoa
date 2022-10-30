import styles from '../../../styles/Home.module.css'


function Instagram({ instagramPosts }) {
  console.log('instagram:', instagramPosts)
  return (
    <>
    <h2 className={styles.sub_title}>@TOATOA_PIPA</h2>
    <div className={styles.grid}>
      <div className={styles.grid}>
        <a href="" className={styles.card}>
          <p> cards insta</p>
        </a>
      </div>
      {/* <ul>
        {instagramPosts.map(({ node }, i) => {
          return (
            <li>
              <a
                href={`https://www.instagram.com/p/${node.shortcode}`}
                key={i}
                aria-label="view image on Instagram"
              >
                <img
                  src={node.thumbnail_src}
                  alt={
                    // the caption with hashtags removed
                    node.edge_media_to_caption.edges[0].node.text
                      .replace(/(#\w+)+/g, "")
                      .trim()
                  }
                />
              </a>
            </li>
          )
        })}
      </ul> */}
    </div>
    </>
    );
}

export default Instagram;
