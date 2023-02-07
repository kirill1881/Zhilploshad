import React from "react";
import { ReactComponent as Logo } from "../../Shared/img/logo.svg";
import { ReactComponent as Instagram } from "../../Shared/img/instagram.svg";
import { ReactComponent as Facebook } from "../../Shared/img/faceboock.svg";
import { ReactComponent as Telegram } from "../../Shared/img/telegram.svg";
import { ReactComponent as TikTok } from "../../Shared/img/tik-tok.svg";

import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo className={styles.logo} />
      <div className={styles.wrapper}>
        <a href={`tel: +375290000000`} className={styles.headerTel}>
          +375 (29) 000-00-00
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
        <button className={styles.btn}>Записаться на консультацию</button>
      </div>
    </header>
  );
};
