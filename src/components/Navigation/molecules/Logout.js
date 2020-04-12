import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import AppContext from 'context';
import { login } from 'data/routes';
import { lightRed } from 'styled/colors';
import logoutIcon from 'assets/icons/logout.svg';
import Button from '../atoms/Button';

const StyledButton = styled(Button)`
  background-size: 60%;
`;

const Logout = () => {
  const { setUser, setToken, setIsLogged, setTraining, setUserDetails, visibility } = useContext(
    AppContext,
  );
  const history = useHistory();

  const buttonOnClick = () => {
    localStorage.clear();
    setUser({});
    setUserDetails({ bmi: 0, data: {} });
    setToken('');
    setTraining({ data: [], sportId: '', sportData: [], delete: false, sport: {} });
    setIsLogged(false);
    history.push(login);
  };

  return (
    <StyledButton
      smallButton={visibility.mainButton && visibility.calendarButton}
      onClick={buttonOnClick}
      buttonColor={lightRed}
      icon={logoutIcon}
    />
  );
};

export default Logout;
