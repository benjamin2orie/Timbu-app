import React from "react";
import styles from "../Home/Child.module.css";
import Child1 from "../Home/Home_Images/ccol1.jpeg";
import Child2 from "../Home/Home_Images/ccol2.png";
import Child3 from "../Home/Home_Images/ccol3.png";
import Child4 from "../Home/Home_Images/ccol4.png";

const Child = () => {
  return (
    <div>
      <section>
        <div>
          <h3>Children's Corner</h3>
          <h5>see all</h5>
        </div>
        <div className={styles.container_collection}>
          <div className={styles.cntainer_card}>
            <div className={styles.card}>
              <img
                src={Child1}
                alt="new collection item"
                className={styles.col1}
              />
              <h6>Courtie petite</h6>
              <p>$5.00</p>
              <h5>suitable for all occassion</h5>
              <div>
                <a href="#">add to cart</a>
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
            </div>
            <div className={styles.card}>
              <img
                src={Child2}
                alt="new collection item"
                className={styles.col1}
              />
              <h6>Baby boys and Girls</h6>
              <p>$5.00</p>
              <h5>suitable for all occassion</h5>
              <div>
                <a href="#">add to cart</a>
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
            </div>
          </div>
          {/* cart implementation */}

          <div className={styles.cntainer_card}>
            <div className={styles.card}>
              <img
                src={Child3}
                alt="new collection item"
                className={styles.col1}
              />
              <h6>Courtie petite</h6>
              <p>$5.00</p>
              <h5>suitable for all occassion</h5>
              <div>
                <a href="#">add to cart</a>
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
            </div>
            <div className={styles.card}>
              <img
                src={Child4}
                alt="new collection item"
                className={styles.col1}
              />
              <h6>Baby boys and Girls</h6>
              <p>$5.00</p>
              <h5>suitable for all occassion</h5>
              <div>
                <a href="#">add to cart</a>
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

export default Child;
