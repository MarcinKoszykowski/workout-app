import React, { useContext } from 'react';
import styled from 'styled-components';
import userIcon from 'assets/icons/user-solid.svg';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import AppContext from 'context';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 1;
    }
  }

  @media screen and (max-width: 1024px) {
    &:active {
      opacity: 0.8;
    }
  }
`;

const StyledIcon = styled(Icon)`
  @media screen and (max-width: 768px) {
    height: 20px;
    width: 20px;
  }

  @media screen and (max-width: 576px) {
    height: 15px;
    width: 15px;
  }

  @media screen and (max-width: 420px) {
    height: 25px;
    width: 25px;
  }
`;

const UserNavigation = () => {
  const { setUserPanelVisibility, userPanelVisibility } = useContext(AppContext);

  const userOnClick = () => {
    setUserPanelVisibility(!userPanelVisibility);
  };

  return (
    <Wrapper onClick={userOnClick}>
      <Text>{localStorage.getItem('userName')}</Text>
      <StyledIcon icon={userIcon} />
    </Wrapper>
  );
};

export default UserNavigation;
