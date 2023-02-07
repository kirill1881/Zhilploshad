export const classNames = (classes) => {
  return Object.keys(classes)
    .filter((key) => classes[key])
    .map((key) => key)
    .join(" ");
};
