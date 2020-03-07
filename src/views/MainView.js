import React, { useEffect, useContext, useCallback } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import axios from 'axios';
import UserContext from 'contexts/UserContext';
import LoaderContext from 'contexts/LoaderContext';
import { login as loginURL } from 'data/routes';
import { user as userRoute } from 'data/api_routes';
import { setUrlAPI, getUserName } from 'data/functions';
import { purple, colorWithOpacity } from 'styled/colors';
import animations from 'styled/animations';
import mainImage from 'assets/images/main.jpg';
import NavigationTemplate from 'templates/NavigationTemplate';

const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: url(${mainImage}) no-repeat top left;
  background-size: cover;
  animation: ${animations.opacityZeroToOne} 0.5s ease;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${colorWithOpacity(purple, 0.3)};
    z-index: 1;
  }
`;

const MainView = () => {
  const { setLogin, setUser, setUserName, login } = useContext(UserContext);
  const { setLoading } = useContext(LoaderContext);
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
    setTimeout(() => setLoading(false), 1000);
  }, [callbackCheckLogin, setLoading, login]);

  return (
    <>
      <NavigationTemplate />
      <Background />
    </>
  );
};

export default MainView;
