import React from "react";
import mcol1 from "../Home/Home_Images/mcol1.png";
import mcol2 from "../Home/Home_Images/mcol2.jpeg";
import mcol3 from "../Home/Home_Images/mcol3.jpeg";
import mcol4 from "../Home/Home_Images/mcol4.jpeg";
import styles from "../Home/Men.module.css";

const Men = () => {
  return (
    <div>
      <section>
        <div>
          <h3>women's section</h3>
          <h5>see all</h5>
        </div>
        <div className={styles.container_collection}>
          <div className={styles.cntainer_card}>
            <div className={styles.card}>
              <img
                src={mcol1}
                alt="new collection item"
                className={styles.col1}
              />
              <h6>louis vuitton</h6>
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
                src={mcol2}
                alt="new collection item"
                className={styles.col1}
              />
              <h6>Hombres cazadora</h6>
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
                src={mcol3}
                alt="new collection item"
                className={styles.col1}
              />
              <h6>Louis vuitton</h6>
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
                src={mcol4}
                alt="new collection item"
                className={styles.col1}
              />
              <h6>Hombres cazadora</h6>
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

export default Men;
