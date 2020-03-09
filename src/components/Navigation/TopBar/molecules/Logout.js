import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import AppContext from 'context';
import { lightRed } from 'styled/colors';
import logoutIcon from 'assets/icons/logout.svg';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import { login } from 'data/routes';
import { removeUserFromLocalStorage } from 'data/functions';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    opacity: 0.8;
  }
`;

const StyledText = styled(Text)`
  color: ${lightRed};
  margin-left: 15px;
  margin-right: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledIcon = styled(Icon)`
  height: 30px;
  width: 30px;

  @media screen and (max-width: 576px) {
    height: 25px;
    width: 25px;
  }
`;

const Logout = () => {
  const { setUser, setLogin } = useContext(AppContext);

  const history = useHistory();

  const logoutOnClick = () => {
    removeUserFromLocalStorage();
    setUser({});
    setLogin(false);
    history.push(login);
  };



  return (
    <Wrapper onClick={logoutOnClick}>
      <StyledIcon icon={logoutIcon} />
      <StyledText>logout</StyledText>
    </Wrapper>
  );
};

export default Logout;
