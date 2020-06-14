import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { useDidMount } from 'beautiful-react-hooks';
import styled from 'styled-components';
import AppContext from 'context';
import sports from 'data/sports';
import { page404 } from 'data/routes';
import NavigationTemplate from 'templates/NavigationTemplate';
import Sport from 'components/Sport/Sport';
import Background from 'atoms/Background';
import Wrapper from 'atoms/Wrapper';

const StyledBackground = styled(Background)`
  background-position: center center;
`;

const SportView = () => {
  const { setTraining, training, setVisibility } = useContext(AppContext);
  const history = useHistory();

  useDidMount(() => {
    setVisibility((prevState) => ({
      ...prevState,
      mainButton: true,
      calendarButton: true,
      modal: false,
    }));

    const urlSport = window.location.pathname.slice(7);
    const setSport = () => sports.find(({ name }) => name === urlSport);

    if (!training.sport.name) {
      if (setSport()) {
        setTraining((prevState) => ({
          ...prevState,
          sport: setSport(),
        }));
      } else {
        history.push(page404);
      }
    }
  });

  return (
    <Wrapper>
      <NavigationTemplate four />
      <StyledBackground image={training.sport.background} />
      {training.sport.name && <Sport />}
    </Wrapper>
  );
};

export default SportView;
