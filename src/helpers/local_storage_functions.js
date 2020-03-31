const setUserInLocalStorage = (user) => {
  localStorage.setItem('userId', user._id); // eslint-disable-line
  localStorage.setItem('userEmail', user.email);
  localStorage.setItem('userPassword', user.password);
  localStorage.setItem('userIsLogged', true);
};

const setDetailsInLocalStorage = (details) => {
  localStorage.setItem('userAge', details.age);
  localStorage.setItem('userHeight', details.height);
  localStorage.setItem('userWeight', details.weight);
};

const checkDetailsInLocalStora = () =>
  Object.prototype.hasOwnProperty.call(localStorage, 'userAge') &&
  Object.prototype.hasOwnProperty.call(localStorage, 'userHeight') &&
  Object.prototype.hasOwnProperty.call(localStorage, 'userWeight');

const setBMIInLocalStorage = (bmi) => {
  localStorage.setItem('userBMI', bmi);
};

const setTokenInLocalStorage = (token) => {
  localStorage.setItem('userToken', token);
};

export {
  setUserInLocalStorage,
  setDetailsInLocalStorage,
  setBMIInLocalStorage,
  setTokenInLocalStorage,
  checkDetailsInLocalStora,
};
