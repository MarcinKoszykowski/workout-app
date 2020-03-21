import React, { useContext } from 'react';
import userIcon from 'assets/icons/user-solid.svg';
import { blue } from 'styled/colors';
import AppContext from 'context';
import Button from '../atmos/Button';

const UserButton = () => {
  const { setUserPanelVisibility, userPanelVisibility } = useContext(AppContext);

  const buttonOnClick = () => {
    setUserPanelVisibility(!userPanelVisibility);
  };

  return <Button onClick={buttonOnClick} buttonColor={blue} icon={userIcon} />;
};

export default UserButton;
