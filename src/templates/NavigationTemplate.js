import React from 'react';
import LeftBar from 'components/Navigation/LeftBar/LeftBar';
import TopBar from 'components/Navigation/TopBar/TopBar';
import UserPanel from 'components/UserPanel/UserPanel';

const NavigationTemplate = () => {
  return (
    <>
      <TopBar />
      <LeftBar />
      <UserPanel />
    </>
  );
};

export default NavigationTemplate;
