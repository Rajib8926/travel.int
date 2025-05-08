"use client";
import React from "react";
import styles from "./AboutPhoto.module.css";


export default function AboutPhoto() {
  return (
    <img
      src="Без имени-2 1.png"
      alt="hero"
      style={{ position: "absolute", bottom: "0px" }}
      className={styles.aboutPhoto}
    />
  );
}
