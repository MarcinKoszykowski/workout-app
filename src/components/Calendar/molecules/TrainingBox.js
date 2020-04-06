import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { setSportTime, setSportKcal, setSportTitle } from 'helpers/sport_function';
import animations from 'styled/animations';
import { white, colorWithOpacity } from 'styled/colors';
import Text from '../atoms/Text';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 3px;
  background-color: ${colorWithOpacity(white, 0.5)};
  animation: ${animations.opacityZeroToOne} 1s ease;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 576px) {
    padding: 8px;
    margin-bottom: 2px;
  }

  @media screen and (max-width: 420px) {
    padding: 5px;
  }
`;

const TrainingBox = ({ item }) => {
  const { time, kcal, sport } = item;

  return (
    <Wrapper>
      <Text>{setSportTitle(sport)}</Text>
      <Text>{setSportTime(time)}</Text>
      <Text>{setSportKcal(kcal)}</Text>
    </Wrapper>
  );
};

TrainingBox.propTypes = {
  item: PropTypes.shape({
    sport: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    kcal: PropTypes.number.isRequired,
  }).isRequired,
};

export default TrainingBox;
