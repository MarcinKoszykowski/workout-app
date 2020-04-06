import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { setSportDate } from 'helpers/sport_function';
import TrainingBox from '../molecules/TrainingBox';
import DateText from '../atoms/DateText';

const Wrapper = styled.div`
  margin: 15px 0 3px;

  &:first-child {
    margin-top: 0;
  }

  @media screen and (max-width: 576px) {
    margin-bottom: 2px;
  }
`;

const TrainingBoxWithDate = ({ item }) => (
  <Wrapper>
    <DateText>{setSportDate(item.date)}</DateText>
    <TrainingBox item={item} />
  </Wrapper>
);

TrainingBoxWithDate.propTypes = {
  item: PropTypes.shape({
    date: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    kcal: PropTypes.number.isRequired,
  }).isRequired,
};

export default TrainingBoxWithDate;
