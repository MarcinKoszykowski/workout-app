import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AppContext from 'context';
import { setSportRoute } from 'data/routes';
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

const SportIcon = ({ sport }) => {
  const {
    setSport,
    setUserPanelVisibility,
    mainButtonVisibility,
    setMainButtonVisibility,
    calendarButtonVisibility,
    setCalendarButtonVisibility,
  } = useContext(AppContext);

  const buttonOnClick = () => {
    setSport(sport);
    setUserPanelVisibility(false);

    if (!mainButtonVisibility) {
      setMainButtonVisibility(true);
    }

    if (calendarButtonVisibility) {
      setCalendarButtonVisibility(false);
    }
  };

  return (
    <Wrapper onClick={buttonOnClick}>
      <Link to={setSportRoute(sport.name)}>
        <Icon icon={sport.icon} />
      </Link>
    </Wrapper>
  );
};

SportIcon.propTypes = {
  sport: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    kcal: PropTypes.number.isRequired,
    low: PropTypes.number,
    high: PropTypes.number,
  }).isRequired,
};

export default SportIcon;
