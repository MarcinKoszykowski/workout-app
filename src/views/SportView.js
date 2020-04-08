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
  const { setTraining, training, setVisibility } = useContext(AppContext);

  useDidMount(() => {
    setVisibility((prevState) => ({
      ...prevState,
      mainButton: true,
      calendarButton: true,
      modal: false,
    }));

    if (!training.sport.name) {
      setTraining((prevState) => ({
        ...prevState,
        sport: sports.find((item) => item.name === window.location.pathname.slice(7)),
      }));
    }
  });

  return (
    <Wrapper>
      <NavigationTemplate four />
      <StyledBackground image={training.sport.background} />
      {training.sport.name && <Sport />}
      {!training.sport.background && <Loader />}
    </Wrapper>
  );
};

export default SportView;
