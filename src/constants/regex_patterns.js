export const REGEX_NAME = /^[a-zA-Z]+(([',.-][a-zA-Z])?[a-zA-Z]*)*$/;
export const REGEX_ZIPCODE = /^[0-9]{0,5}$/;
export const REGEX_STATE = /^[a-zA-z]{0,2}$/;
export const REGEX_CC = {
  VISA: /^[0-9 ]{0,19}$/,
  MC: /^(?:5[1-5][0-9]{14})$/,
  AMEX: /^(?:3[47][0-9]{13})$/,
  DISC: /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/,
  SECURITY_CODE: /^[0-9]{0,3}$/
};
