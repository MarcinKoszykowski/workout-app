import React, { useContext } from 'react';
import styled from 'styled-components';
import UserContext from 'contexts/UserContext';
import userIcon from 'assets/icons/user-solid.svg';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    opacity: 0.8;
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
  const { user } = useContext(UserContext);
  return (
    <Wrapper>
      <Text>{user.email}</Text>
      <StyledIcon icon={userIcon} />
    </Wrapper>
  );
};

export default UserNavigation;
