import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Custom404() {
  return(
  <div className={styles.main}>
    <h1>404 - Page Not Found</h1>
    <Link href="/">
        Voltar para Home Page
    </Link>
  </div>)
}