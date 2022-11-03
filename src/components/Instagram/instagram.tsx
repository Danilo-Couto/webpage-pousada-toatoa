import styles from '../../../styles/Home.module.css'

function Feed(feed) {
  return feed.slice(0, 4).map((obj, key) => {
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

function Instagram(props) {
  return (
    <div className={styles.main}>
    <a href='https://www.instagram.com/toatoa_pipa/' target="_blank" className={styles.sub_title} rel="noreferrer">@TOATOA_PIPA</a>
      <div className={styles.grid}>
        <div>
          {!props.feed == null ? Feed(props.feed) : <p></p>}    
        </div>
      </div>
    </div>
    );
}

export async function getStaticProps(context) {
  const instaUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,username,timestamp&access_token=${process.env.NEXT_PUBLIC_ACESS_TOKEN}`
  const data = await fetch(instaUrl);
  const dataJson = await data.json();
  const instaFeed = dataJson.data;

  return {
    props: {
      feed: instaFeed || null
    },
  }
}

export default Instagram;
