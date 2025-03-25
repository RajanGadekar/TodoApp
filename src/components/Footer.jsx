import React from "react";
import styles from "./footer.module.css";

const Footer = ({ comp, tot }) => {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed Todos : {comp}</span>
      <span className={styles.item}>Total : {tot}</span>
    </div>
  );
};

export default Footer;
