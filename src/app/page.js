"use client"
import styles from './page.module.css'
import Link from 'next/link'

const Home = () => {

  return (
      <main className={styles.main}>

        <Link href="/ar/skate-city">Skate City</Link>
        <Link href="/ar/deutsche-stadt">Deutsche Stadt</Link>
        
      </main>
  )
}

export default Home
