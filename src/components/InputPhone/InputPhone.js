import React from "react";
import styles from "../Input/input.module.scss";

export const InputPhone = ({ legend, placeholder, type, value, onChange }) => {
  const handleChange = (event) => {
    const inputValue = event.target.value;
    const modifiedValue = inputValue.replace(/\D/g, "").slice(0, 12);
    onChange(modifiedValue);
  };

  const handleBlur = () => {
    let formattedPhone = value;
    if (value.length === 12) {
      formattedPhone = `+${value.slice(0, 3)} ${value.slice(
        3,
        5
      )} ${value.slice(5, 8)} ${value.slice(8, 10)} ${value.slice(10, 12)}`;
    }
    onChange(formattedPhone);
  };

  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{legend}</legend>
      <input
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        autoComplete="off"
      />
    </fieldset>
  );
};
