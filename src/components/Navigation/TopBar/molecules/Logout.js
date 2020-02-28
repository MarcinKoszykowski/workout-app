import React from 'react';
import styled from 'styled-components';
import logoutIcon from 'assets/icons/logout.svg';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import { lightRed } from 'styled/colors';

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
    font-weight: 400;
    font-size: 0.9rem;
    margin-left: 12.5px;
  }

  @media screen and (max-width: 576px) {
    display: none;
  }
`;

const StyledIcon = styled(Icon)`
  height: 30px;
  width: 30px;

  @media screen and (max-width: 768px) {
    height: 25px;
    width: 25px;
  }
`;

const Logout = () => {
  return (
    <Wrapper>
      <StyledIcon icon={logoutIcon} />
      <StyledText>logout</StyledText>
    </Wrapper>
  );
};

export default Logout;
