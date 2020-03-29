import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from 'context';
import UserDetails from '../molecules/UserDetails';
import ExitButton from '../atoms/ExitButton';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px 0 10%;

  @media screen and (max-width: 576px) {
    padding-left: 7.5%;
  }

  @media screen and (max-width: 420px) {
    padding: 10px 10px 0 7.5%;
  }
`;

const TopPanel = () => {
  const { setUserPanelVisibility } = useContext(AppContext);

  const exitButtonOnClick = () => {
    setUserPanelVisibility(false);
  };

  return (
    <Wrapper>
      <UserDetails />
      <ExitButton onClick={exitButtonOnClick} />
    </Wrapper>
  );
};

export default TopPanel;
