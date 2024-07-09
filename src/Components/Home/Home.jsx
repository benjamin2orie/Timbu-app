import React from "react";
import Women from "./Women";
import Footer from "./Footer";
import HeaderLogo from "../Home/Home_Images/Head.png";
import Ef from "../Home/Home_Images/EF.png";
import Cart from "../Home/Home_Images/Cart3.png";
import icon from "../Home/Home_Images/Icon.png";
import menu from "../Home/Home_Images/menu.png";
import vector1 from "../Home/Home_Images/vector1.png";
import var2 from "../Home/Home_Images/col2.png";
import var1 from "../Home/Home_Images/col1.png";
import var3 from "../Home/Home_Images/col3.png";
import var4 from "../Home/Home_Images/col4.png";
// import Person1 from "../Home/Home_Images/Person1.png";
import styles from "../Home/Home.module.css";

const Home = () => {
  return (
    <>
      <header className={styles.header_container}>
        <div className={styles.cart_box}>
          <div className={styles.cart_flex}>
            <img src={Ef} alt="cart icon" />
            <h3>edenFashionWorld</h3>
          </div>
          <div className={styles.addToCart}>
            <img src={Cart} alt="add to cart" className={styles.Cartadded} />
            {/* <img src={vector1} alt="vector icon" /> */}
            {/* <img src={Person1} alt="person icon" /> */}
            <img src={menu} alt="menu icon" />
          </div>
        </div>
        <div className={styles.div_search}>
          <img src={icon} alt="serach icon" className={styles.search} />
          <input type="text" placeholder="search for products" />
        </div>
        <div className={styles.container}>
          <img
            src={HeaderLogo}
            alt="display of items"
            className={styles.image_container}
          />
        </div>
        <div></div>
      </header>
      <section id="moveTop">
        <div className={styles.newCollection}>
          <h3>New collections</h3>
          <h5>see all</h5>
        </div>
        <div className={styles.container_collection}>
          <div className={styles.cntainer_card}>
            <div className={styles.card}>
              <img
                src={var1}
                alt="new collection item"
                className={styles.col1}
              />
              <h6>varsity jacket</h6>
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
                src={var2}
                alt="new collection item"
                className={styles.col1}
              />
              <h6>Casual basic</h6>
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
                src={var3}
                alt="new collection item"
                className={styles.col1}
              />
              <h6>varsity jacket</h6>
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
                src={var4}
                alt="new collection item"
                className={styles.col1}
              />
              <h6>Casual basic</h6>
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
      <Women />
      <Footer />
    </>
  );
};

export default Home;
