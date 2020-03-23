import axios from 'axios';
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

export {
  setUrlAPI,
  setUserInLocalStorage,
  checkEditInUserForm,
  setDetailsInLocalStorage,
  checkDetailsInLocalStora,
  getDataFromApi,
};
