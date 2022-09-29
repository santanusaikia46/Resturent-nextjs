import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured'
import PlantList from '../components/PlantList'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>Ugaoo</title>
        <meta name="description" content="santanu saikia next creation" />
        <link rel="icon" href="/plant.png" />
      </Head>
      <Featured/>
      <PlantList/>
    </div>
  )
}
