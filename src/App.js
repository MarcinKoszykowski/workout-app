import React, { useContext } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import GlobalStyle from 'styled/GlobalStyle';
import { main, login as loginURL, sport } from 'data/routes';
import Loader from 'atoms/Loader';
import AppContext from 'context';
import SportView from 'views/SportView';
import {
  checkDetailsInLocalStora,
  setDetailsInLocalStorage,
  getDataFromApi,
  calculateBMI,
  setBMIInLocalStorage,
} from 'data/functions';
import { user as userRoute, details as detailsRoute } from 'data/api_routes';
import { useDidMount } from 'beautiful-react-hooks';
import MainView from './views/MainView';
import LoginView from './views/LoginView';

const App = () => {
  const { setUserIsLogged, setUser, userIsLogged, setUserBMI, setDetails, loading } = useContext(
    AppContext,
  );
  const history = useHistory();

  const checkUser = (user) => {
    const { password, email } = user;
    const passwordLS = localStorage.getItem('userPassword');
    const emailLS = localStorage.getItem('userEmail');

    return password === passwordLS && email === emailLS;
  };

  const loginUser = (user) => {
    setUser({ ...user });
    setUserIsLogged(true);
  };

  const checkUserStatus = (data) => {
    const { status, user } = data;

    if (status === 1 && checkUser(user)) {
      loginUser(user);
    } else {
      history.push(loginURL);
    }
  };

  const setDetailsFromLocalStorage = () => {
    setDetails({
      age: localStorage.getItem('userAge'),
      height: localStorage.getItem('userHeight'),
      weight: localStorage.getItem('userWeight'),
    });
  };

  const checkDetailsStatus = (data) => {
    const {
      status,
      details: { age, height, weight },
    } = data;

    if (status === 1) {
      setDetails({ age, height, weight });
      setDetailsInLocalStorage({ age, height, weight });
      setUserBMI(calculateBMI(height, weight));
      setBMIInLocalStorage(calculateBMI(height, weight));
    }
  };

  const getUserData = () =>
    getDataFromApi(userRoute.id, { id: localStorage.getItem('userId') }, checkUserStatus);

  const getDetailsData = () => {
    if (checkDetailsInLocalStora()) {
      setDetailsFromLocalStorage();
      setUserBMI(localStorage.getItem('userBMI'));
    } else {
      getDataFromApi(
        detailsRoute.userId,
        { userId: localStorage.getItem('userId') },
        checkDetailsStatus,
      );
    }
  };

  const handleGetData = () => {
    if (localStorage.getItem('userIsLogged') === 'true') {
      getUserData();
      getDetailsData();
    } else {
      history.push(loginURL);
    }
  };

  useDidMount(() => {
    if (!userIsLogged) {
      handleGetData();
    }
  });

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
