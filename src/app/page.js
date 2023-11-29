"use client"

import dynamic from 'next/dynamic'
import styles from './page.module.css'

// import MindThree from '@/components/mind-three'
const MindThree = dynamic(
  () => import('../components/mind-three'),
  { ssr: false}
)

const Home = () => {
  return (
      <main className={styles.main}>
        <MindThree />
      </main>
  )
}

export default Home
