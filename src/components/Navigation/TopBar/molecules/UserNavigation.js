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

const UserNavigation = () => {
  const { user } = useContext(UserContext);
  return (
    <Wrapper>
      <Text>{user.email}</Text>
      <Icon icon={userIcon} />
    </Wrapper>
  );
};

export default UserNavigation;
