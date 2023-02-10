import React, { useEffect, useState } from "react";
import { ReactComponent as Close } from "../../Shared/img/close.svg";
import { ReactComponent as Stars } from "../../Shared/img/stars.svg";
import { Input } from "../Input/Input";
import { InputPhone } from "../InputPhone/InputPhone";
import { CheckBox } from "../CheckBox/CheckBox";
import styles from "./Modal.module.scss";
import { Button } from "../Button/Button";
import { validateFormData } from "../helpers/validateFormData";

export const Modal = ({ closeModal }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [messages, setMessages] = useState({ text: "", isError: true });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validateError = validateFormData(name, phone);
    if (!validateError) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("contact", phone);
      formData.append("comment", "");
      setIsDisabled(true);
      const data = await fetch("http://178.172.138.15:8089/clients", {
        method: "POST",
        body: formData,
      });

      if (data?.status < 400) {
        setIsDisabled(false);
        setPhone("");
        setName("");
        setCheckbox(false);
        setMessages({
          text: "Спасибо наши менеджеры свяжется с вами в ближайшее время",
          isError: false,
        });
      }
    } else {
      setMessages({ text: validateError, isError: true });
    }
  };

  useEffect(() => {
    if (messages.isError) {
      setMessages({ text: "", isError: true });
    }
    if (!!name && !!phone && !!checkbox) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [name, phone, checkbox]);

  useEffect(() => {
    let clear = null;
    if (!messages.isError) {
      clear = setTimeout(() => {
        setMessages({ text: "", isError: false });
      }, 3000);
    }
    return () => clearTimeout(clear);
  }, [messages.isError]);

  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.add("noScroll");
    return () => {
      body.classList.remove("noScroll");
    };
  });

  return (
    <div className={styles.modal}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Close className={styles.iconClose} onClick={closeModal} />
        <Stars className={styles.starsLeft} />
        <h2 className={styles.title}>
          Запишись и измени свою жизнь прямо сейчас
        </h2>
        <Stars />
        <Input
          type="text"
          legend="Имя*"
          placeholder="Введите ваше имя"
          value={name}
          onChange={setName}
        />
        <InputPhone
          type="tel"
          legend="Номер телефона*"
          value={phone}
          onChange={setPhone}
          placeholder="375 (xx) xxx xx xx"
        />
        <CheckBox id="checkbox" checked={checkbox} onChange={setCheckbox}>
          Я ознакомился с <a href="#>"> договором оферты</a> и согласен на
          обработку персональных данных
        </CheckBox>
        <Button
          color="primary"
          className={styles.btnSubmit}
          disabled={isDisabled}
          type="submit"
        >
          Записаться
        </Button>
      </form>
    </div>
  );
};
