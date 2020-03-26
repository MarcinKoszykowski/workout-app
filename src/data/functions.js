import axios from 'axios';
import { green, orange, lightRed, yellow } from 'styled/colors';
import url from './url';

const setUrlAPI = (source) => `${url}${source}`;

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

const setBMIInLocalStorage = (bmi) => {
  localStorage.setItem('userBMI', bmi);
};

const checkEditInUserForm = (formUser, details) =>
  formUser.age === details.age &&
  formUser.height === details.height &&
  formUser.weight === details.weight;

const checkDetailsInLocalStora = () =>
  Object.prototype.hasOwnProperty.call(localStorage, 'userAge') &&
  Object.prototype.hasOwnProperty.call(localStorage, 'userHeight') &&
  Object.prototype.hasOwnProperty.call(localStorage, 'userWeight');

const getDataFromApi = (route, item, func, errFunc) => {
  axios
    .post(setUrlAPI(route), item, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((result) => result.data)
    .then((data) => func(data))
    .catch((err) => {
      console.error(err); // eslint-disable-line

      if (errFunc) {
        errFunc();
      }
    });
};

const calculateBMI = (height, weight) => ((weight / (height * height)) * 10000).toFixed(2);

const calculateIndexBMI = (bmi) => {
  if (bmi < 16) {
    return 0.95;
  } if (bmi >= 16 && bmi < 18.5) {
    return 0.975;
  } if (bmi >= 18.5 && bmi < 25) {
    return 1;
  } if (bmi >= 25 && bmi < 30) {
    return 1.025;
  } if (bmi >= 30 && bmi < 35) {
    return 1.05;
  } if (bmi >= 35 && bmi < 40) {
    return 1.075;
  } 
    return 1.1;
  
};

const setColorBMI = (bmi) => {
  if (bmi < 18.5) {
    return yellow;
  } if (bmi >= 18.5 && bmi < 25) {
    return green;
  } if (bmi >= 25 && bmi < 30) {
    return orange;
  } 
    return lightRed;
  
};

const calculateCalories = (time, kcal, weight, bmi, intensity = 1) => {
  const indexBMI = calculateIndexBMI(bmi);

  return (time / 60) * kcal * weight * indexBMI * intensity;
};

export {
  setUrlAPI,
  setColorBMI,
  setUserInLocalStorage,
  checkEditInUserForm,
  setDetailsInLocalStorage,
  setBMIInLocalStorage,
  checkDetailsInLocalStora,
  getDataFromApi,
  calculateBMI,
  calculateIndexBMI,
  calculateCalories,
};
