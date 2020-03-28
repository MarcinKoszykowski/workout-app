import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { setSportRoute } from 'data/routes';
import AppContext from 'context';
import Icon from '../atoms/Icon';

const Wrapper = styled.div`
  margin-bottom: 25px;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 992px) {
    margin-bottom: 22.5px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 576px) {
    margin-bottom: 15px;
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 12.5px;
  }
`;

const SportIcon = ({ icon, name, background }) => {
  const {
    setSportBackground,
    setUserPanelVisibility,
    mainButtonVisibility,
    setMainButtonVisibility,
  } = useContext(AppContext);

  const buttonOnClick = () => {
    setSportBackground(background);
    setUserPanelVisibility(false);

    if (!mainButtonVisibility) {
      setMainButtonVisibility(true);
    }
  };

  return (
    <Wrapper onClick={buttonOnClick}>
      <Link to={setSportRoute(name)}>
        <Icon icon={icon} />
      </Link>
    </Wrapper>
  );
};

SportIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
};

export default SportIcon;
