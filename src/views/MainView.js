import React, { useContext } from 'react';
import { useDidMount } from 'beautiful-react-hooks';
import styled from 'styled-components';
import AppContext from 'context';
import mainImage from 'assets/images/main.jpg';
import NavigationTemplate from 'templates/NavigationTemplate';
import Background from 'atoms/Background';
import Wrapper from 'atoms/Wrapper';

const StyledBackground = styled(Background)`
  background-position: top left;
`;

const MainView = () => {
  const { setVisibility, setLoading } = useContext(AppContext);

  useDidMount(() => {
    setVisibility((prevState) => ({
      ...prevState,
      mainButton: false,
      calendarButton: true,
      modal: false,
    }));

    setTimeout(() => setLoading(false), 1000);
  });

  return (
    <Wrapper>
      <NavigationTemplate />
      <StyledBackground image={mainImage} />
    </Wrapper>
  );
};

export default MainView;
