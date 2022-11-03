import HeadComponent from '../components/Head/head'
import styles from '../../styles/Home.module.css'
import MainPage from '../components/MainPage/mainpage'
import Footer from '../components/Footer/footer'
import Header from '../components/Header/header'
import { rooms } from '../consts'

export default function Index({quartos}) {
  return (
    <div className={styles.container}>
      <HeadComponent />
      <Header />
      <MainPage quartos={quartos}/>     
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const quartos = rooms

  return {
      props: {
        quartos: quartos
      }
  }
}

// references: https://www.thebivvi-telluride.com/#the-bivouac