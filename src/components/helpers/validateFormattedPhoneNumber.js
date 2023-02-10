export const validateFormattedPhoneNumber = (phoneNumber) => {
  const formattedPhone = phoneNumber.split(" ").join("");
  const regex = /^\+375(29|25|44|33)\d{7}$/;
  return regex.test(formattedPhone);
};
