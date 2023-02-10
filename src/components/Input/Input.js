import React from "react";
import styles from "./input.module.scss";

export const Input = ({ legend, placeholder, type, value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{legend}</legend>
      <input
        onChange={handleChange}
        value={value}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        autoComplete="off"
      />
    </fieldset>
  );
};
