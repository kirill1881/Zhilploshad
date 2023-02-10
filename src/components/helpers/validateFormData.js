import { validateFormattedPhoneNumber } from "./validateFormattedPhoneNumber";

export const validateFormData = (name, phone) => {
  if (!name || !phone) {
    return "Поле Имя и Телефон обязательные заполните их пожалуйста";
  }
  const validPhone = validateFormattedPhoneNumber(phone);
  if (!validPhone) {
    return "Неверный номер телефона, пример 375(29|25|44|33) 000 00 00";
  } else {
    return "";
  }
};
