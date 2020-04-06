import React, { useContext } from 'react';
import AppContext from 'context';
import { blue } from 'styled/colors';
import userIcon from 'assets/icons/user-solid.svg';
import Button from '../atoms/Button';

const UserButton = () => {
  const {
    setUserPanelVisibility,
    userPanelVisibility,
    mainButtonVisibility,
    calendarButtonVisibility,
  } = useContext(AppContext);

  const buttonOnClick = () => {
    setUserPanelVisibility(!userPanelVisibility);
  };

  return (
    <Button
      smallButton={mainButtonVisibility && calendarButtonVisibility}
      onClick={buttonOnClick}
      buttonColor={blue}
      icon={userIcon}
    />
  );
};

export default UserButton;
