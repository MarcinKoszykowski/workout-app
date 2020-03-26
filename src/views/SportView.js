import React, { useContext } from 'react';
import NavigationTemplate from 'templates/NavigationTemplate';
import AppContext from 'context';
import sports from 'data/sports';
import Background from 'atoms/Background';
import Wrapper from 'atoms/Wrapper';
import { useDidMount } from 'beautiful-react-hooks';

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
      <Background image={setBackground()} />
    </Wrapper>
  );
};

export default SportView;
