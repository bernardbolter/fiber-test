"use client"

import styles from './page.module.css'

import ReactThree from '@/components/react-three'
import MindThree from '@/components/mind-three'

const Home = () => {
  return (
      <main className={styles.main}>
        <MindThree />
      </main>
  )
}

export default Home
