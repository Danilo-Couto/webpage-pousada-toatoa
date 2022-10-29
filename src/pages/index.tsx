import HeadComponent from '../components/Head/head'
import styles from '../../styles/Home.module.css'
import MainPage from '../components/MainPage/mainpage'
import Footer from '../components/Footer/footer'
import Header from '../components/Header/header'

export default function Home() {
  return (
    <div className={styles.container}>
      <HeadComponent />
      <Header />
      <MainPage />     
      <Footer />
    </div>
  )
}

// references: https://www.thebivvi-telluride.com/#the-bivouac