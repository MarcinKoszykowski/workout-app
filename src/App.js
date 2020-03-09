import React, { useContext, useEffect, useCallback } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import GlobalStyle from 'styled/GlobalStyle';
import { main, login as loginURL, sport } from 'data/routes';
import LoginView from './views/LoginView';
import MainView from './views/MainView';
import Loader from 'components/Loader/Loader';
import AppContext from 'context';
import SportView from 'views/SportView';
import axios from 'axios';
import { setUrlAPI, getUserName } from 'data/functions';
import { user as userRoute } from 'data/api_routes';

const App = () => {
  const { setLogin, setUser, setUserName, login, loading } = useContext(AppContext);
  const history = useHistory();

  const checkLogin = () => {
    if (localStorage.getItem('userLogin') === 'true') {
      axios
        .post(
          setUrlAPI(userRoute.id),
          {
            id: localStorage.getItem('userId'),
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        .then(result => result.data)
        .then(data => checkStatus(data))
        .catch(err => {
          console.error(err);
        });
    } else {
      history.push(loginURL);
    }
  };

  const checkStatus = data => {
    const { status, user } = data;

    if (status === 1 && checkUser(user)) {
      loginUser(user);
    } else {
      history.push(loginURL);
    }
  };

  const checkUser = user => {
    const { password, email } = user;
    const passwordLS = localStorage.getItem('userPassword');
    const emailLS = localStorage.getItem('userEmail');

    return password === passwordLS && email === emailLS;
  };

  const loginUser = user => {
    setUser({ ...user });
    setLogin(true);
    setUserName(getUserName(user.email));
  };

  const handleCheckLogin = () => checkLogin();
  const callbackCheckLogin = useCallback(handleCheckLogin, [login]);

  useEffect(() => {
    if (!login) {
      callbackCheckLogin();
    }
  }, [callbackCheckLogin, login]);

  return (
    <>
      <GlobalStyle />
      {loading && <Loader />}
      <Switch>
        <Route exact path={main} component={MainView} />
        <Route exact path={loginURL} component={LoginView} />
        <Route exact path={sport} component={SportView} />
      </Switch>
    </>
  );
};

export default App;
