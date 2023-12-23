export const validateLoginForm = (email, password) => {
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);
  return isEmailValid && isPasswordValid;
};

export const validateRegisterForm = (email, password, username) => {
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);
  const isUsernameValid = validateUsername(username);
  return isEmailValid && isPasswordValid && isUsernameValid;
};

export const validateEmail = (email) => {
  return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
};

export const validatePassword = (password) => {
  return password.trim().length > 6 && password.trim().length < 15;
};

export const validateUsername = (username) => {
  return username.trim().length >= 3 && username.trim().length <= 12;
};
