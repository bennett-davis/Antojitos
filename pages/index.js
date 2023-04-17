import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Antojitos Izcalli</title>
        <meta name="description" content="Antojitos Izcalli" />
        {/* FIXME <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        Hello Big Chungus
      </main>

      <footer >
         {/* make footer component */}
      </footer>
    </div>
  )
}
