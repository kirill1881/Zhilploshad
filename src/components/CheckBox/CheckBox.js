import React from "react";

export const CheckBox = ({ id, checked, onChange, children, className }) => {
  const handleChecked = () => {
    onChange(!checked);
  };
  return (
    <div className={className}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleChecked}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  );
};
