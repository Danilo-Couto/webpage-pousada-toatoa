import HeadComponent from '../components/Head/head'
import Header from '../components/Header/header'
import styles from '../../styles/Home.module.css'
import MainPage from '../components/MainPage/mainpage'
import Footer from '../components/Footer/footer'

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