import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kasar</title>
      </Head>
      <main>
        <div className='flex h-full'>
          <div className='bg-kasar2 m-auto'>
            <h1 className="text-center text-6xl">Welcome on our website !</h1>
          </div>
        </div>
      </main>
    </div>
  )
}