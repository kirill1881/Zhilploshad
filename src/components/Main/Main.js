import React from "react";
import imgOne from "../../Shared/img/imgOne.png";
import styles from "./Main.module.scss";

export const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.textContainer}>
        <p className={styles.offlineAndOnline}>
          <span className={styles.textColor}> Онлайн или Офлайн: </span>
          выбирай какой формат тебе нужен
        </p>
        <h1 className={styles.infoText}>
          <div>
            IT – это <span className={styles.textColor}>просто</span>,
          </div>
          хватит думать
        </h1>
        <p className={styles.textDescription}>
          Запишись на{" "}
          <span className={styles.textColor}>
            бесплатную консультацию с ментором
          </span>{" "}
          школы Dev Place, задай интересующие тебя вопросы и начни развиваться в
          <strong>самом перспективном направлении 2023 года</strong>
        </p>
        <button>Успей записаться</button>
      </div>
      <figure className={styles.imageBlock}>
        <img src={imgOne} alt="войти в IT" />
      </figure>
    </main>
  );
};
