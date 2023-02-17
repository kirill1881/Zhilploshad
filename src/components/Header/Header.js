import React, { useState } from "react";
import { ReactComponent as Logo } from "../../Shared/img/logo.svg";
import { ReactComponent as Instagram } from "../../Shared/img/instagram.svg";
import { ReactComponent as Facebook } from "../../Shared/img/faceboock.svg";
import { ReactComponent as Telegram } from "../../Shared/img/telegram.svg";
import { ReactComponent as TikTok } from "../../Shared/img/tik-tok.svg";

import styles from "./header.module.scss";
import { Modal } from "../Modal/Modal";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <Logo className={styles.logo} />
      <div className={styles.wrapper}>
        <a href={`tel: +375292849123`} className={styles.headerTel}>
          +375 (29) 28-49-123
        </a>
        <div className={styles.social}>
          <a href="/">
            <Instagram />
          </a>
          <a href="/">
            <Facebook />
          </a>
          <a href="/">
            <Telegram />
          </a>
          <a href="/">
            <TikTok />
          </a>
        </div>
        <button onClick={handleOpenModal} className={styles.btn}>
          Записаться на консультацию
        </button>
      </div>
      {isOpen && <Modal closeModal={handleOpenModal} />}
    </header>
  );
};
