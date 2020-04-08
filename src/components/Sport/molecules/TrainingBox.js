import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AppContext from 'context';
import { setSportDate, setSportTime, setSportKcal } from 'helpers/sport_function';
import animations from 'styled/animations';
import { white, colorWithOpacity, purple, lightRed } from 'styled/colors';
import Text from '../atoms/Text';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${({ deleteButton }) =>
    deleteButton ? colorWithOpacity(lightRed, 0.5) : colorWithOpacity(white, 0.5)};
  cursor: pointer;
  transition: background-color 0.3 ease;
  animation: ${animations.opacityZeroToOne} 1s ease;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 1024px) {
    &:hover {
      background-color: ${colorWithOpacity(purple, 0.25)};

      > ${Text} {
        color: ${white};
      }
    }

    &:active {
      background-color: ${colorWithOpacity(purple, 0.35)};

      > ${Text} {
        color: ${white};
      }
    }
  }

  @media screen and (max-width: 1024px) {
    &:active {
      background-color: ${colorWithOpacity(purple, 0.25)};

      > ${Text} {
        color: ${white};
      }
    }
  }

  @media screen and (max-width: 576px) {
    padding: 8px;
    margin-bottom: 8px;
  }

  @media screen and (max-width: 420px) {
    padding: 5px;
    margin-bottom: 5px;
  }
`;

const TrainingBox = ({ item }) => {
  const { setTraining, setVisibility } = useContext(AppContext);
  const { date, time, kcal, _id } = item;

  const trainingBoxOnClick = () => {
    setTraining((prevState) => ({ ...prevState, sportId: _id }));
    setVisibility((prevState) => ({ ...prevState, modal: true }));
  };

  return (
    <Wrapper onClick={trainingBoxOnClick}>
      <Text>{setSportDate(date)}</Text>
      <Text>{setSportTime(time)}</Text>
      <Text>{setSportKcal(kcal)}</Text>
    </Wrapper>
  );
};

TrainingBox.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    kcal: PropTypes.number.isRequired,
  }).isRequired,
};

export default TrainingBox;
