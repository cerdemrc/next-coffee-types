import Head from 'next/head'
import Image from 'next/image'
import styles from '../public/styles/homepage.module.scss'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={styles.homepage}>
        <Image src="/coffeetypes.jpg" width={500} height={500} />     
      </div>
    </div>
  )
}
