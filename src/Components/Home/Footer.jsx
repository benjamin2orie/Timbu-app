import React from "react";
import styles from "../Home/Footer.module.css";
import vector from "../Home/Home_Images/Vectortop.png";
import Facebook from "../Home/Home_Images/facebook.png";
import insta from "../Home/Home_Images/instagram.png";
import x from "../Home/Home_Images/Vectorx.png";
import youtube from "../Home/Home_Images/youtube.png";

const Footer = () => {
  return (
    <div>
      <section className={styles.footer_section}>
        <div className={styles.toppage}>
          <h5>know more</h5>
          <a href="#moveTop">
            <img src={vector} alt="bookmark icon" />
            <h5>back to top</h5>
          </a>
        </div>
        <div>
          <div className={styles.footer_private_policy}>
            <ul>
              <li>contact us</li>
              <li>help center</li>
              <li>terms and conditon</li>
            </ul>
            <div className={styles.footer_product}>
              <ul>
                <li>report a product</li>
                <li>our privacy</li>
                <li>live chat</li>
              </ul>
            </div>
            <div className={styles.footer_link}>
              <h5>some useful link</h5>
              <ul>
                <li>how to shop on EdenFashioWorld</li>
                <li>report a product</li>
                <li>dispute resolution policy</li>
                <li>return and refund timeframe</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footer_condition}>
          <div className={styles.footer_media}>
            <img src={Facebook} alt="facebook icon" />
            <img src={insta} alt="instagram icon" />
            <img src={x} alt="x icon" />
            <img src={youtube} alt="youtube icon" />
          </div>
          <p>all rights reversed</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
