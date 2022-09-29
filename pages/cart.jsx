import React from "react";
import styles from "../styles/Cart.module.css";
import Image from "next/image";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.tr}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tbody>
            <tr>
              <td>
                <div className={styles.imageContainer}>
                  <Image
                    src="/images/plant.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>SPIDER PLANT</span>
              </td>
              <td className={styles.extras}>Add Container</td>
              <td>
                <span className={styles.price}>₹ 99</span>
              </td>
              <td>
                <span className={styles.quantity}>2</span>
              </td>
              <td>
                <span className={styles.total}>₹ 198</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.imageContainer}>
                  <Image
                    src="/images/plant.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>SPIDER PLANT</span>
              </td>
              <td className={styles.extras}>Add Container</td>
              <td>
                <span className={styles.price}>₹ 99</span>
              </td>
              <td>
                <span className={styles.quantity}>2</span>
              </td>
              <td>
                <span className={styles.total}>₹ 198</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.imageContainer}>
                  <Image
                    src="/images/plant.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>SPIDER PLANT</span>
              </td>
              <td className={styles.extras}>Add Container</td>
              <td>
                <span className={styles.price}>₹ 99</span>
              </td>
              <td>
                <span className={styles.quantity}>2</span>
              </td>
              <td>
                <span className={styles.total}>₹ 198</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
            <h2 className={styles.title}>CART TOTAL</h2>
            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Subtotal</b>₹ 99.00
            </div>
            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Discount</b>₹ 0.00
            </div>
            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Total</b>₹ 99.00
            </div>
            <button className={styles.button}>CKECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
