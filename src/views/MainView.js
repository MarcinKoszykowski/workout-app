import React, { useContext } from 'react';
import AppContext from 'context';
import mainImage from 'assets/images/main.jpg';
import NavigationTemplate from 'templates/NavigationTemplate';
import Background from 'atoms/Background';
import Wrapper from 'atoms/Wrapper';
import { useDidMount } from 'beautiful-react-hooks';

const MainView = () => {
  const { setLoading, mainButtonVisibility, setMainButtonVisibility } = useContext(AppContext);

  useDidMount(() => {
    if (mainButtonVisibility) {
      setMainButtonVisibility(false);
    }
    setTimeout(() => setLoading(false), 1000);
  });

  return (
    <Wrapper>
      <NavigationTemplate />
      <Background main image={mainImage} />
    </Wrapper>
  );
};

export default MainView;
