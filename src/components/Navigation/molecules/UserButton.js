import React, { useContext } from 'react';
import AppContext from 'context';
import { blue } from 'styled/colors';
import userIcon from 'assets/icons/user.svg';
import Button from '../atoms/Button';

const UserButton = () => {
  const { visibility, setVisibility } = useContext(AppContext);

  const buttonOnClick = () => {
    setVisibility((prevState) => ({
      ...prevState,
      userPanel: !visibility.userPanel,
      modal: false,
    }));
  };

  return (
    <Button
      smallButton={visibility.mainButton && visibility.calendarButton}
      onClick={buttonOnClick}
      buttonColor={blue}
      icon={userIcon}
    />
  );
};

export default UserButton;
