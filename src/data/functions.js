import url from './url';

const setUrlAPI = source => `${url}${source}`;

const setUserInLocalStorage = user => {
  localStorage.setItem('userId', user._id); // eslint-disable-line
  localStorage.setItem('userEmail', user.email);
  localStorage.setItem('userPassword', user.password);
  localStorage.setItem('userIsLogged', true);
};

const removeUserFromLocalStorage = () => {
  localStorage.removeItem('userId');
  localStorage.removeItem('userEmail');
  localStorage.removeItem('userPassword');
  localStorage.removeItem('userIsLogged');
};

const checkEditInUserForm = (formUser, user) =>
  formUser.login !== user.login || formUser.age !== user.age || formUser.height !== user.height || formUser.width !== user.width;

export { setUrlAPI, setUserInLocalStorage, removeUserFromLocalStorage, checkEditInUserForm };
