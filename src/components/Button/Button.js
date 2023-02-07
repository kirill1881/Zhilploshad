import React from "react";
import { classNames } from "../../Shared/helpers/classNames";
import styles from "./Button.module.scss";

export const Button = ({
  children,
  color = "primary",
  className,
  disabled,
  prefixIcon,
  postfixIcon,
  classNameChildren,
  isLoading = false,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={classNames({
        [styles.button]: true,
        [styles.withPrefixPostfix]: !!(prefixIcon || postfixIcon),
        [className]: true,
        [styles[color]]: true,
      })}
    >
      <div className={styles.content}>
        {prefixIcon}
        {isLoading ? (
          <span>Загрузка.....</span>
        ) : (
          <div
            className={classNames({
              [styles.textWithIcon]: !!prefixIcon,
              [classNameChildren]: !!classNameChildren,
            })}
          >
            {children}
          </div>
        )}
      </div>
      {postfixIcon}
    </button>
  );
};
