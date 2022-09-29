import Image from "next/image";
import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.item}>
        <Image src="/images/footer.jpg" layout="fill" alt="" objectFit="cover"/>
      </div> */}
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE WILL PROVIDE YOU THE BEST PLANT FOR YOU.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR PLANTS</h1>
          <address className={styles.text}>
            House No: A/89/4,
            <br/>H.P.C. Colony, Jagiroad 
            <br/>Morigaon, Assam(782410)
          </address><br/>
          <address className={styles.text}>
            House No: A/89/4,
            <br/>H.P.C. Colony, Jagiroad 
            <br/>Morigaon, Assam(782410)
          </address>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY TO FRIDAY
            <br/> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY TO SUNDAY
            <br/> 12:00 - 22:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
