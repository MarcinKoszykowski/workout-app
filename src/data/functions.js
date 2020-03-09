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
  localStorage.setItem('userName', getUserName(user.email));
  localStorage.setItem('userLogin', true);
};

const removeUserFromLocalStorage = () => {
  localStorage.removeItem('userId');
  localStorage.removeItem('userEmail');
  localStorage.removeItem('userPassword');
  localStorage.removeItem('userName');
  localStorage.removeItem('userLogin');
};

const getCurrentDate = () => {
  const date = new Date();
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};

export { setUrlAPI, getUserName, setUserInLocalStorage, removeUserFromLocalStorage, getCurrentDate };
