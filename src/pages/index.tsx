import HeadMain from '../components/Head/head'
import styles from '../../styles/Home.module.css'
import MainPage from '../components/MainPage/mainpage'
import Footer from '../components/Footer/footer'
import Header from '../components/Header/header'
import useTranslation from '../hooks/useTranslation'
import changeLanguages from '../hooks/changeLanguages'
import { rooms } from '../lib/rooms_const'

export default function Index({feed}) {
  const { locale } = useTranslation()
  const quartos = changeLanguages(locale);

  return (
    <div className={styles.container}>
      <HeadMain />
      <Header />
      <MainPage quartos={quartos} feed={feed}/>     
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const instaUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,username,timestamp&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_ACESS_TOKEN}`
  const data = await fetch(instaUrl);
  const dataJson = await data.json();
  const instaFeed = dataJson.data.filter(data => data.media_type === 'IMAGE' )
  
  return {
      props: {
        quartos: rooms,
        feed: instaFeed || null
      }  
  }    
}  
