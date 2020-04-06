import React, { useContext } from 'react';
import { useDidMount } from 'beautiful-react-hooks';
import styled from 'styled-components';
import AppContext from 'context';
import calendarImage from 'assets/images/calendar.jpg';
import NavigationTemplate from 'templates/NavigationTemplate';
import Background from 'atoms/Background';
import Wrapper from 'atoms/Wrapper';
import Calendar from 'components/Calendar/Calendar';

const StyledBackground = styled(Background)`
  background-position: top left;
`;

const CalendarView = () => {
  const {
    calendarButtonVisibility,
    setCalendarButtonVisibility,
    mainButtonVisibility,
    setMainButtonVisibility,
  } = useContext(AppContext);

  useDidMount(() => {
    if (!mainButtonVisibility) {
      setMainButtonVisibility(true);
    }

    if (calendarButtonVisibility) {
      setCalendarButtonVisibility(false);
    }
  });

  return (
    <Wrapper>
      <NavigationTemplate />
      <Calendar />
      <StyledBackground image={calendarImage} />
    </Wrapper>
  );
};

export default CalendarView;
