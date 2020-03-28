import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import AppContext from 'context';
import { main } from 'data/routes';
import { white, colorWithOpacity } from 'styled/colors';
import logoImage from 'assets/images/logo.png';
import Button from '../atoms/Button';

const StyledButton = styled(Button)`
  background-size: 80%;
  background-color: ${colorWithOpacity(white, 0.4)};

  @media screen and (min-width: 1024px) {
    &:hover {
      background-color: ${colorWithOpacity(white, 0.2)};
    }
  }

  @media screen and (max-width: 1024px) {
    &:active {
      background-color: ${colorWithOpacity(white, 0.2)};
    }
  }
`;

const MainButton = () => {
  const { setUserPanelVisibility, setMainButtonVisibility } = useContext(AppContext);
  const history = useHistory();

  const buttonOnClick = () => {
    history.push(main);
    setUserPanelVisibility(false);
    setMainButtonVisibility(false);
  };

  return <StyledButton onClick={buttonOnClick} buttonColor={white} icon={logoImage} />;
};

export default MainButton;