import React, { useEffect, useContext } from 'react';
import AppContext from 'context';
import mainImage from 'assets/images/main.jpg';
import NavigationTemplate from 'templates/NavigationTemplate';
import UserPanel from 'components/UserPanel/UserPanel';
import Background from 'atoms/Background';
import Wrapper from 'atoms/Wrapper';

const MainView = () => {
  const { setLoading } = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, [setLoading]);

  return (
    <Wrapper>
      <NavigationTemplate />
      <Background main image={mainImage} />
      <UserPanel />
    </Wrapper>
  );
};

export default MainView;
