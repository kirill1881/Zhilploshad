import React, { useState } from "react";
import { ReactComponent as Star } from "../../Shared/img/burst-pucker.svg";
import { ReactComponent as Line } from "../../Shared/img/line.svg";
import { Button } from "../Button/Button";
import styles from "./Main.module.scss";
import { Modal } from "../Modal/Modal";

export const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main className={styles.main}>
      <div className={styles.textContainer}>
        <p className={styles.offlineAndOnline}>
          <span className={styles.textColor}> Онлайн или Офлайн: </span>
          выбирай какой формат тебе нужен
        </p>
        <h1 className={styles.infoText}>
          <div className={styles.linkContainer}>

          </div>
          <div>
            Недвидимость нужна <span className={styles.textColor}>всем</span>,
          </div>
          пора решаться! <Star className={styles.star} />
        </h1>
        <p className={styles.textDescription}>
          Запишитесь на{" "}
          <span className={styles.textColor}>
            индивидуальную беспалтную консультацию с риелтором
          </span>{" "}
          агенства ЖИЛПЛОЩАДЬ, задайте интересующие вас вопросы и мы подберем вам недвижимость{" "}
          <strong>либо поможем выгодно продать вашу!</strong>
        </p>
        <Button
          onClick={handleOpenModal}
          color="secondary"
          className={styles.btn}
        >
          Успей записаться
        </Button>
      </div>
      <div className={styles.imageBlock} />
      {isOpen && <Modal closeModal={handleOpenModal} />}
    </main>
  );
};
