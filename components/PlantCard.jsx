import Image from 'next/image'
import React from 'react'
import styles from "../styles/PlantCard.module.css"

const PlantCard = () => {
  return (
    <div className={styles.container}>
        <Image src="/images/Plant.jpg" width="350" height="350" alt=""/>
        <h1 className={styles.title}>SPIDER PLANT</h1>
        <span className={styles.price}>₹ 99</span>
        <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi molestiae autem totam doloribus quis. Tempore at facilis eos, modi fuga nam nihil hic exercitationem rerum! Officiis ab fuga omnis atque!
        </p>
    </div>
  )
}

export default PlantCard