import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import AppContext from 'context';
import { calendar } from 'data/routes';
import { orange } from 'styled/colors';
import logoImage from 'assets/icons/calendar.svg';
import Button from '../atoms/Button';

const StyledButton = styled(Button)`
  background-size: 55%;
`;

const CalendarButton = () => {
  const { setVisibility, visibility } = useContext(AppContext);
  const history = useHistory();

  const buttonOnClick = () => {
    history.push(calendar);
    setVisibility((prevState) => ({
      ...prevState,
      userPanel: false,
      calendarButton: false,
      modal: false,
    }));
  };

  return (
    <StyledButton
      smallButton={visibility.mainButton && visibility.calendarButton}
      onClick={buttonOnClick}
      buttonColor={orange}
      icon={logoImage}
    />
  );
};

export default CalendarButton;
