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
      <ul className={styles.faculty}>
        <li>
          <a className={styles.offeAgreement} href="#">
            Договор публичной оферты
          </a>
        </li>
        <li>
          <a href="https://devplace.by/courses">
            <strong>Курсы</strong>
          </a>
        </li>
        <li>
          <a href="https://devplace.by/java">Факультет разработки на Java </a>
        </li>
        <li>
          <a href="https://devplace.by/python">Факультет разработки на Python</a>
        </li>

        <li>
          <a href="https://devplace.by/frontend">Факультет Frontend</a>
        </li>
        <li>
          <a href="https://devplace.by/software-testing">Факультет Тестирования ПО</a>
        </li>
        <li>
          <a href="https://devplace.by/teachers">
            <strong>Преподаватели</strong>
          </a>
        </li>
      </ul>
      <div className={styles.socialLink}>
        <a href="https://www.instagram.com/dev_place_/">
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
        <h2 className={styles.contact}>Контакты</h2>
        <p>
          ООО "Девплейс" город Минск
        </p>
        {/*ООО "Буизнес Кирилла" | УНП 1234567890 Свидетельство о государственной
        регистрации № 692033963 от 29.05.2020 выдано Узденским районным
        исполнительным комитетом*/}
        <p className={styles.adress}>
          Адрес: 220035, Республика Беларусь, г. Минск, пр. Независимости 95 к1,
          оф. 410 Режим работы: понедельник - воскресенье с 9:00 до 23.00
        </p>

        <p>+375(29) 28 29 123 | devplaceacademy@gmail.com</p>
      </div>
    </footer>
  );
};
