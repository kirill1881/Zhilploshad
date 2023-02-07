import React from "react";
import { ReactComponent as Instagram } from "../../Shared/img/instagram.svg";
import { ReactComponent as Facebook } from "../../Shared/img/faceboock.svg";
import { ReactComponent as Telegram } from "../../Shared/img/telegram.svg";
import { ReactComponent as TikTok } from "../../Shared/img/tik-tok.svg";
import { ReactComponent as Logo } from "../../Shared/img/logo.svg";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <ul>
        <a className={styles.offeAgreement} href="#">
          Договор публичной оферты
        </a>
        <li>
          <a href="#">Курсы</a>
        </li>
        <li>
          <a href="#">Факультет разработки на Java </a>
        </li>
        <li>
          <a href="#">Факультет разработки на Python</a>
        </li>
        <li>
          <a href="#">Факультет разработки на Python</a>
        </li>
        <li>
          <a href="#">Факультет Frontend</a>
        </li>
        <li>
          <a href="#">Факультет Тестирования ПО</a>
        </li>
        <li>
          <a href="#">Преподаватели</a>
        </li>
      </ul>
      <div className={styles.socialLink}>
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
      <div className={styles.logoBlock}>
        <Logo className={styles.logo} />
        <span>© 2023 Все права защищены.</span>
      </div>
      <div className={styles.contactBlock}>
        <h2>Контакты</h2>
        <p>
          ООО "Буизнес Кирилла" | УНП 1234567890 Свидетельство о государственной
          регистрации № 692033963 от 29.05.2020 выдано Узденским районным
          исполнительным комитетом
        </p>

        <p className={styles.adress}>
          Адрес: 220035, Республика Беларусь, г. Минск, ул. Сурганова, д. 43,
          оф. 802 Режим работы: понедельник - пятница с 10:00 до 19:00
        </p>

        <p>+375(29) 000-00-00 | nashapochta@gmail.com</p>
      </div>
    </footer>
  );
};
