import React, { useContext } from 'react';
import styled from 'styled-components';
import { purple } from 'styled/colors';
import { setColorBMI } from 'data/functions';
import AppContext from 'context';
import Text from '../atoms/Text';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  @media screen and (max-width: 576px) {
    margin-top: 7.5px;
  }
`;

const StyledText = styled(Text)`
  font-size: 0.8rem;
  font-weight: 600;
  margin-top: 1px;

  @media screen and (max-width: 576px) {
    font-size: 0.75rem;
  }
`;

const StyledEmailText = styled(Text)`
  font-size: 0.85rem;

  @media screen and (max-width: 576px) {
    font-size: 0.8rem;
  }
`;

const UserDetails = () => {
  const { userBMI } = useContext(AppContext);
  const email = localStorage.getItem('userEmail');

  return (
    <Wrapper>
      <StyledEmailText color={purple}>{email}</StyledEmailText>
      {userBMI !== 0 && <StyledText color={setColorBMI(userBMI)}>{`BMI: ${userBMI}`}</StyledText>}
    </Wrapper>
  );
};

export default UserDetails;
