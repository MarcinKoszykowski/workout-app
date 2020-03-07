import url from './url';

const setUrlAPI = source => `${url}${source}`;

const getUserName = email => {
  let name = '';

  for (let i = 0; i < email.length; i++) {
    if (email.charAt(i) !== '@') {
      name += email.charAt(i);
    } else {
      return name;
    }
  }
};

const setUserInLocalStorage = user => {
  localStorage.setItem('userId', user._id);
  localStorage.setItem('userEmail', user.email);
  localStorage.setItem('userPassword', user.password);
  localStorage.setItem('userLogin', true);
};

export { setUrlAPI, getUserName, setUserInLocalStorage };
