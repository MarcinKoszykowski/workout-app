import React, { useContext } from 'react';
import { useDidMount } from 'beautiful-react-hooks';
import styled from 'styled-components';
import AppContext from 'context';
import sports from 'data/sports';
import NavigationTemplate from 'templates/NavigationTemplate';
import Sport from 'components/Sport/Sport';
import Background from 'atoms/Background';
import Wrapper from 'atoms/Wrapper';
import Loader from 'atoms/Loader';

const StyledBackground = styled(Background)`
  background-position: center center;
`;

const SportView = () => {
  const {
    sport,
    setSport,
    calendarButtonVisibility,
    setCalendarButtonVisibility,
    mainButtonVisibility,
    setMainButtonVisibility,
  } = useContext(AppContext);

  useDidMount(() => {
    if (!mainButtonVisibility) {
      setMainButtonVisibility(true);
    }

    if (!calendarButtonVisibility) {
      setCalendarButtonVisibility(true);
    }

    if (!sport.name) {
      setSport(sports.find((item) => item.name === window.location.pathname.slice(7)));
    }
  });

  return (
    <Wrapper>
      <NavigationTemplate four />
      <StyledBackground image={sport.background} />
      {sport.name && <Sport />}
      {!sport.background && <Loader />}
    </Wrapper>
  );
};

export default SportView;
