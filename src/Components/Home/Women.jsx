import React from "react";
import Men from "./Men";
import Child from "./Child";
import General from "./General";
import wcol1 from "../Home/Home_Images/wcol1.png";
import wcol2 from "../Home/Home_Images/wcol2.jpeg";
import wcol3 from "../Home/Home_Images/wcol3.png";
import wcol4 from "../Home/Home_Images/wcol4.jpeg";
import styles from "../Home/Women.module.css";

const Women = () => {
  return (
    <div>
      <section>
        <div className={styles.women_collection}>
          <h3>women's section</h3>
          <h5>see all</h5>
        </div>
        <div className={styles.container_collection}>
          <div className={styles.container_card}>
            <div className={styles.card}>
              <img
                src={wcol1}
                alt="new collection item"
                className={styles.col1}
              />
              <h6>varsity jacket</h6>
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
                src={wcol2}
                alt="new collection item"
                className={styles.col1}
              />
              <h6>Casual basic</h6>
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
                src={wcol3}
                alt="new collection item"
                className={styles.col1}
              />
              <h6>varsity jacket</h6>
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
                src={wcol4}
                alt="new collection item"
                className={styles.col1}
              />
              <h6>Casual basic</h6>
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
      <Men />
      <Child />
      <General />
    </div>
  );
};

export default Women;
