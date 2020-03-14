import React, { useContext } from 'react';
import NavigationTemplate from 'templates/NavigationTemplate';
import AppContext from 'context';
import sports from 'data/sports';
import { useHistory } from 'react-router';
import { main } from 'data/routes';
import Background from 'atoms/Background';
import Wrapper from 'atoms/Wrapper';
import Button from 'atoms/Button';

const SportView = () => {
  const { sportBackground } = useContext(AppContext);
  const location = window.location.href.slice(28);
  const history = useHistory();

  const buttonOnClick = () => {
    history.push(main);
  };

  const setBackground = () => {
    if (sportBackground) {
      return sportBackground;
    } else {
      return sports.find(item => item.name === location).background;
    }
  };

  return (
    <Wrapper>
      <NavigationTemplate />
      <Background image={setBackground()} />
      <Button onClick={buttonOnClick} />
    </Wrapper>
  );
};

export default SportView;
