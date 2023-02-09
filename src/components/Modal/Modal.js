import React, { useEffect } from "react";
import { ReactComponent as Close } from "../../Shared/img/close.svg";
import { ReactComponent as Stars } from "../../Shared/img/stars.svg";
import styles from "./Modal.module.scss";

export const Modal = ({ closeModal }) => {
  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.add("noScroll");
    return () => {
      body.classList.remove("noScroll");
    };
  });

  return (
    <div className={styles.modal}>
      <form className={styles.form}>
        <Close className={styles.iconClose} onClick={closeModal} />
        <Stars className={styles.starsLeft} />
        <h2 className={styles.title}>
          Запишись и измени свою жизнь прямо сейчас
        </h2>
        <Stars />
      </form>
    </div>
  );
};
