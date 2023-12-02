"use client"
import { useState } from 'react'
import dynamic from 'next/dynamic'
import styles from './page.module.css'
import ReactThree from '@/components/react-three'
import Link from 'next/link'


const MindThree = dynamic(
  () => import('../components/mind-three'),
  { ssr: false}
)

const Home = () => {
  const [screen, setScreen] = useState('none')

  return (
      <main className={styles.main}>

        <p onClick={() => setScreen('three')}>Three</p>
        <Link href="/ar/deutsche-stadt">Deutsche Stadt</Link>

        {screen === 'mind' && <MindThree setScreen={setScreen} />}
        {screen === 'three' && <ReactThree setScreen={setScreen} />}
        
      </main>
  )
}

export default Home
