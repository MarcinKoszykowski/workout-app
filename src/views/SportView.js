import React, { useContext } from 'react';
import { useDidMount } from 'beautiful-react-hooks';
import styled from 'styled-components';
import AppContext from 'context';
import sports from 'data/sports';
import NavigationTemplate from 'templates/NavigationTemplate';
import Sport from 'components/Sport/Sport';
import Background from 'atoms/Background';
import Wrapper from 'atoms/Wrapper';
import { setSportTitle } from 'helpers/functions';

const StyledBackground = styled(Background)`
  background-position: center center;
`;

const SportView = () => {
  const { sportBackground, mainButtonVisibility, setMainButtonVisibility } = useContext(AppContext);
  const location = window.location.href.slice(28);

  const setBackground = () => {
    if (sportBackground) {
      return sportBackground;
    }
    return sports.find((item) => item.name === location).background;
  };

  useDidMount(() => {
    if (!mainButtonVisibility) {
      setMainButtonVisibility(true);
    }
  });

  return (
    <Wrapper>
      <NavigationTemplate />
      <StyledBackground image={setBackground()} />
      <Sport title={setSportTitle(location)} />
    </Wrapper>
  );
};

export default SportView;
