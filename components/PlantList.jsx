import React from "react";
import styles from "../styles/PlantList.module.css";
import PlantCard from "./PlantCard";
import Pagination from "@material-ui/lab/Pagination";

const PlantList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        GET YOUR FIRST PLANT AT AN AFORDABLE PRICE
      </h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
        culpa tempora officia debitis, nemo nam dolorem dolor distinctio
        reiciendis, fugit rerum quo ducimus itaque dicta perspiciatis
        consequatur necessitatibus similique omnis!
      </p>
      <div className={styles.wrapper}>
        <PlantCard />
        <PlantCard />
        <PlantCard />
        <PlantCard />
        <PlantCard />
        <PlantCard />
      </div>
      <div className={styles.pagination}>
        <Pagination count={10} />
      </div>
    </div>
  );
};

export default PlantList;
