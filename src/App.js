import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useDidMount } from 'beautiful-react-hooks';
import AppContext from 'context';
import getDataFromAPI from 'helpers/api_functions';
import { calculateBMI, functionWithTimeout } from 'helpers/functions';
import {
  checkDetailsInLocalStora,
  setDetailsInLocalStorage,
  setBMIInLocalStorage,
} from 'helpers/local_storage_functions';
import { app } from 'data/value';
import { login as loginURL } from 'data/routes';
import {
  user as userRoute,
  details as detailsRoute,
  training as trainingRoute,
} from 'data/api_routes';
import GlobalStyle from 'styled/GlobalStyle';
import Routes from 'Routes';
import ErrorBar from 'components/ErrorBar/ErrorBar';
import LoadingTemplates from 'templates/LoadingTemplates';

const App = () => {
  const {
    setIsLogged,
    isLogged,
    setUserDetails,
    setTraining,
    setToken,
    setUser,
    loading,
    setLoading,
    setErrorBar,
  } = useContext(AppContext);
  const history = useHistory();

  const checkUser = (user) => {
    const { password, email } = user;
    const passwordLS = localStorage.getItem('userPassword');
    const emailLS = localStorage.getItem('userEmail');

    return password === passwordLS && email === emailLS;
  };

  const loginUser = (user) => {
    setUser({ ...user });
    setIsLogged(true);
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
    setUserDetails((prevState) => ({
      ...prevState,
      data: {
        age: localStorage.getItem('userAge'),
        height: localStorage.getItem('userHeight'),
        weight: localStorage.getItem('userWeight'),
      },
    }));
  };

  const errorFunction = () =>
    functionWithTimeout(
      setErrorBar,
      { visibility: true, text: app.error.server },
      { visibility: false, text: '' },
      3000,
    );

  const checkDetailsStatus = (data) => {
    const {
      status,
      details: { age, height, weight },
    } = data;

    if (status === 1) {
      setDetailsInLocalStorage({ age, height, weight });
      setUserDetails((prevState) => ({
        ...prevState,
        data: { age, height, weight },
        bmi: calculateBMI(height, weight),
      }));
      setBMIInLocalStorage(calculateBMI(height, weight));
    } else if (status === 3) {
      errorFunction();
    }
  };

  const checkTrainingStatus = (trainingData) => {
    const { status, userTraining } = trainingData;

    if (status === 1) {
      setTraining((prevState) => ({ ...prevState, data: userTraining.reverse() }));
    } else if (status === 3) {
      errorFunction();
    }
  };

  const getUserData = () =>
    getDataFromAPI(
      userRoute.id,
      { id: localStorage.getItem('userId') },
      checkUserStatus,
      errorFunction,
      localStorage.getItem('userToken'),
    );

  const getDetailsData = () => {
    if (checkDetailsInLocalStora()) {
      setDetailsFromLocalStorage();
      setUserDetails((prevState) => ({ ...prevState, bmi: localStorage.getItem('userBMI') }));
    } else {
      getDataFromAPI(
        detailsRoute.userId,
        { userId: localStorage.getItem('userId') },
        checkDetailsStatus,
        errorFunction,
        localStorage.getItem('userToken'),
      );
    }
  };

  const getTrainingData = () => {
    getDataFromAPI(
      trainingRoute.getByUserId,
      { userId: localStorage.getItem('userId') },
      checkTrainingStatus,
      errorFunction,
      localStorage.getItem('userToken'),
    );
  };

  const handleGetData = () => {
    if (localStorage.getItem('userIsLogged') === 'true') {
      getUserData();
      getDetailsData();
      setToken(localStorage.getItem('userToken'));
      getTrainingData();
      setLoading(false);
    } else {
      history.push(loginURL);
    }
  };

  useDidMount(() => {
    if (!isLogged) {
      handleGetData();
    }
  });

  return (
    <>
      <GlobalStyle />
      <LoadingTemplates isVisibility={loading} />
      <ErrorBar />
      <Routes />
    </>
  );
};

export default App;
