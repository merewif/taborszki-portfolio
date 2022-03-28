import React from "react";
import styles from "../../../styles/BookCovers.module.scss";

export default function BookCovers() {
  return (
    <>
      <h1>BOOK COVERS</h1>
      <div className={styles.imageContainer}>
        <img src="../images/book-covers/1.png" />
        <img src="../images/book-covers/2.png" />
        <img src="../images/book-covers/3.png" />
        <img src="../images/book-covers/4.png" />
        <img src="../images/book-covers/5.png" />
        <img src="../images/book-covers/6.png" />
        <img src="../images/book-covers/7.png" />
        <img src="../images/book-covers/9.jpg" />
        <img src="../images/book-covers/10.png" />
      </div>
    </>
  );
}
