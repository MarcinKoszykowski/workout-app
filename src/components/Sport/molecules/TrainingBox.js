import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { setSportDate, setSportTime, setSportKcal } from 'helpers/sport_function';
import { white, colorWithOpacity, lightRed } from 'styled/colors';
import AppContext from 'context';
import getDataFromAPI from 'helpers/api_functions';
import { training } from 'data/api_routes';
import animations from 'styled/animations';
import Text from '../atoms/Text';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${colorWithOpacity(white, 0.5)};
  cursor: pointer;
  transition: background-color 0.3 ease;
  animation: ${animations.opacityZeroToOne} 1s ease;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 1024px) {
    &:hover {
      background-color: ${colorWithOpacity(lightRed, 0.3)};
    }

    &:active {
      background-color: ${colorWithOpacity(lightRed, 0.4)};
    }
  }

  @media screen and (max-width: 1024px) {
    &:active {
      background-color: ${colorWithOpacity(lightRed, 0.3)};
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
  const { userTraining, setUserTraining, setDeleteSportTraining } = useContext(AppContext);
  const { date, time, kcal, _id } = item;

  const checkStatus = (data) => {
    const { status } = data;

    console.log(status); // eslint-disable-line
  };

  const trainingBoxOnClick = () => {
    const array = userTraining;
    array.map((arrayItem, index) => (arrayItem._id === _id ? array.splice(index, 1) : null));

    setUserTraining(array);
    setDeleteSportTraining(true);
    getDataFromAPI(
      training.delete,
      { id: _id },
      checkStatus,
      () => console.log('error'), // eslint-disable-line
      localStorage.getItem('userToken'),
    );
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
