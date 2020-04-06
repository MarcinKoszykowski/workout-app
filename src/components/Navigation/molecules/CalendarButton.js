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
  const {
    setUserPanelVisibility,
    calendarButtonVisibility,
    setCalendarButtonVisibility,
  } = useContext(AppContext);
  const history = useHistory();

  const buttonOnClick = () => {
    history.push(calendar);
    setUserPanelVisibility(false);

    if (calendarButtonVisibility) {
      setCalendarButtonVisibility(false);
    }
  };

  return <StyledButton onClick={buttonOnClick} buttonColor={orange} icon={logoImage} />;
};

export default CalendarButton;
