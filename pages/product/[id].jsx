import React, { useState } from "react";
import styles from "../../styles/Product.module.css";
import Image from "next/image";

const Product = () => {
  const [combo, setCombo] = useState(0);
  const plant = {
    id: 1,
    image: "/images/plant.jpg",
    name: "SPIDER PLANT",
    price: [99, 179, 229],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum animi vel voluptatem aperiam cupiditate laborum, obcaecati odio recusandae laudantium architecto ea quos qui unde ab. Accusamus deserunt facere debitis neque.",
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imageContainer}>
          <Image src={plant.image} layout="fill" alt="" objectFit="contain" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{plant.name}</h1>
        <span className={styles.price}>₹{plant.price[combo]}</span>
        <p className={styles.desc}>{plant.desc}</p>
        <h3 className={styles.choose}>Choose the combo</h3>
        <div className={styles.combos}>
          <div className={styles.combo} onClick={() => setCombo(0)}>
            <Image src="/images/1.png" layout="fill" alt="" />
            <span className={styles.number}>No_Combo</span>
          </div>
          <div className={styles.combo} onClick={() => setCombo(1)}>
            <Image src="/images/2.png" layout="fill" alt="" />
            <span className={styles.number}>Combo_of_2</span>
          </div>
          <div className={styles.combo} onClick={() => setCombo(2)}>
            <Image src="/images/3.png" layout="fill" alt="" />
            <span className={styles.number}>Combo_of_3</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional products</h3>
        <div className={styles.products}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="container"
              name="container"
              className={styles.checkbox}
            />
            <label htmlFor="container">Add container</label>
          </div>
        </div><br/>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
