import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from 'context';
import { black } from 'styled/colors';
import timesIcon from 'assets/icons/times.svg';
import Button from '../atoms/Button';

const StyledButton = styled(Button)`
  width: 20px;
  height: 20px;
  margin: 7.5px 7.5px 12.5px auto;
  background-size: 47.5%;

  @media screen and (max-width: 576px) {
    height: 17.5px;
    width: 17.5px;
    margin: 5px 5px 10px auto;
  }

  @media screen and (max-width: 576px) {
    height: 15px;
    width: 15px;
    margin: 5px 5px 7.5px auto;
  }
`;

const ExitButton = () => {
  const { setVisibility } = useContext(AppContext);

  const exitButtonOnClick = () => {
    setVisibility((prevState) => ({ ...prevState, modal: false }));
  };

  return <StyledButton buttonColor={black} icon={timesIcon} onClick={exitButtonOnClick} />;
};

export default ExitButton;
