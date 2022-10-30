import HeadComponent from '../components/Head/head'
import styles from '../../styles/Home.module.css'
import MainPage from '../components/MainPage/mainpage'
import Footer from '../components/Footer/footer'
import Header from '../components/Header/header'


export default function Index({ insta_post }) {

  console.log('posts:', insta_post)
  return (
    <div className={styles.container}>
      <HeadComponent />
      <Header />
      <MainPage feed={insta_post} />     
      <Footer />
    </div>
  )
}

// para gerar novos tokens e user id

// curl -X POST \
// https://api.instagram.com/oauth/access_token \
//   -F client_id=1591021417997482 \
//   -F client_secret=659bb517672492b0e6b168e8a6b905ec \
//   -F grant_type=authorization_code \
//   -F redirect_uri=https://github.com/Danilo-Couto \
//   -F code=AQBzxpP8kjUZ8EDg6AJGbF0KnuDhobIR8ZjzrPaxa83LtsDOlGjdfxYeMjAMdq7SrwSgW_ltVeGkZry3XvDVSUmIYE-DikNjEpmMrC-tPZhKAuHDrpOEOeeh29ddXYfji24-bHyw4tQkLThhoTLDw5ogjiWTh4QRJjDUnWUwTEoYosrplLsjD4FBwvbJaRmeJI__AIhPsYin3jT2_QN1RGZFTyi7lsUb_o_IzL2lm9tbmQ

export async function getStaticProps(context) {
  const url = `https://graph.instagram.com/v15.0/${process.env.USER_ID}/media?access_token=${process.env.ACESS_TOKEN}`

  const data = await fetch(url);
  const feed = await data.json();

  return {
    props: {
      insta_post: feed,
    },
  }
}

// references: https://www.thebivvi-telluride.com/#the-bivouac