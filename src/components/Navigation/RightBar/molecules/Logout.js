import React, { useContext } from 'react';
import styled from 'styled-components';
import logoutIcon from 'assets/icons/logout.svg';
import { lightRed } from 'styled/colors';
import AppContext from 'context';
import { useHistory } from 'react-router';
import { removeUserFromLocalStorage } from 'data/functions';
import { login } from 'data/routes';
import Button from '../atmos/Button';

const StyledButton = styled(Button)`
  background-size: 60%;
`;

const Logout = () => {
  const { setUser, setUserIsLogged } = useContext(AppContext);
  const history = useHistory();

  const buttonOnClick = () => {
    removeUserFromLocalStorage();
    setUser({});
    setUserIsLogged(false);
    history.push(login);
  };

  return <StyledButton onClick={buttonOnClick} buttonColor={lightRed} icon={logoutIcon} />;
};

export default Logout;
