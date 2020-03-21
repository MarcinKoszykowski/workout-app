import React from 'react';
import LeftBar from 'components/Navigation/LeftBar/LeftBar';
import UserPanel from 'components/UserPanel/UserPanel';
import RightBar from 'components/Navigation/RightBar/RightBar';

const NavigationTemplate = () => {
  return (
    <>
      <RightBar />
      <LeftBar />
      <UserPanel />
    </>
  );
};

export default NavigationTemplate;
