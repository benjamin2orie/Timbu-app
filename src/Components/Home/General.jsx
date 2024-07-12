import React from "react";
import styles from "../Home/General.module.css";

import gen1 from "../Home/Home_Images/gen1.png";
import gen2 from "../Home/Home_Images/gen2.jpeg";
import gen3 from "../Home/Home_Images/gen3.jpeg";
import gen4 from "../Home/Home_Images/gen4.jpeg";

const General = () => {
  return (
    <div>
      <section>
        <div className={styles.general_collection}>
          <h3>General Section</h3>
          <h5>see all</h5>
        </div>
        <div className={styles.container_collection}>
          <div className={styles.container_card}>
            <div className={styles.card}>
              <img
                src={gen1}
                alt="new collection item"
                className={styles.col1}
              />
              <h6>Brown micky mouse</h6>
              <p>$5.00</p>
              <h5>suitable for all occassion</h5>
              <div className={styles.btn}>
                <li className={styles.btncard}>
                  <a href="#">add to cart</a>
                </li>
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
            </div>
            <div className={styles.card}>
              <img
                src={gen2}
                alt="new collection item"
                className={styles.col1}
              />
              <h6>Sleeve bodycon</h6>
              <p>$5.00</p>
              <h5>suitable for all occassion</h5>
              <div className={styles.btn}>
                <li className={styles.btncard}>
                  <a href="#">add to cart</a>
                </li>
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
            </div>
          </div>
          {/* cart implementation */}

          <div className={styles.container_card}>
            <div className={styles.card}>
              <img
                src={gen3}
                alt="new collection item"
                className={styles.col1}
              />
              <h6>Brown micky mouse</h6>
              <p>$5.00</p>
              <h5>suitable for all occassion</h5>
              <div className={styles.btn}>
                <li className={styles.btncard}>
                  <a href="#">add to cart</a>
                </li>
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
            </div>
            <div className={styles.card}>
              <img
                src={gen4}
                alt="new collection item"
                className={styles.col1}
              />
              <h6>Sleeve bodycon</h6>
              <p>$5.00</p>
              <h5>suitable for all occassion</h5>
              <div className={styles.btn}>
                <li className={styles.btncard}>
                  <a href="#">add to cart</a>
                </li>
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default General;
