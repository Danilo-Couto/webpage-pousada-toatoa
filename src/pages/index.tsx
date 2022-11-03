import HeadComponent from '../components/Head/head'
import styles from '../../styles/Home.module.css'
import MainPage from '../components/MainPage/mainpage'
import Footer from '../components/Footer/footer'
import Header from '../components/Header/header'
import { rooms } from '../consts'

console.log(rooms)
export default function Index({quartos}) {
  // console.log(quartos[0])
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
        quartos: quartos[0]
      }
  }
}

// references: https://www.thebivvi-telluride.com/#the-bivouac