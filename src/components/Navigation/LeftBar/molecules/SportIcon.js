import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { setSportRoute } from 'data/routes';
import Icon from '../atoms/Icon';
import AppContext from 'context';

const Wrapper = styled.div`
  margin-bottom: 25px;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 992px) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 15px;
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 12.5px;
  }
`;

const SportIcon = ({ icon, name, background }) => {
  const { setSportBackground, setUserPanelVisibility } = useContext(AppContext);

  const buttonOnClick = () => {
    setSportBackground(background);
    setUserPanelVisibility(false);
  };

  return (
    <Wrapper onClick={buttonOnClick}>
      <Link to={setSportRoute(name)}>
        <Icon icon={icon} />
      </Link>
    </Wrapper>
  );
};

export default SportIcon;
