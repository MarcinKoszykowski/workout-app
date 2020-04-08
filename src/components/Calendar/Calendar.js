import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from 'context';
import { colorWithOpacity, white, blue } from 'styled/colors';
import TrainingBoxWithDate from './organisms/TrainingBoxWithDate';
import TrainingBox from './molecules/TrainingBox';

const Wrapper = styled.div`
  position: fixed;
  top: 30px;
  bottom: 30px;
  left: 220px;
  right: 180px;
  min-width: 225px;
  background-color: ${colorWithOpacity(white, 0.4)};

  &::after {
    content: '';
    position: absolute;
    width: 25%;
    top: 50%;
    left: 0;
    bottom: 0;
    border-left: 4px solid ${blue};
    border-bottom: 4px solid ${blue};
  }

  &::before {
    content: '';
    position: absolute;
    width: 25%;
    top: 0;
    right: 0;
    bottom: 50%;
    border-right: 4px solid ${blue};
    border-top: 4px solid ${blue};
  }

  @media screen and (max-width: 992px) {
    left: 190px;
    right: 150px;
  }

  @media screen and (max-width: 768px) {
    top: 110px;
    left: 170px;
    right: 30px;
    bottom: 30px;
  }

  @media screen and (max-width: 576px) {
    top: 95px;
    left: 115px;
    right: 15px;
    bottom: 15px;

    &::after,
    ::before {
      border-width: 3px;
    }
  }

  @media screen and (max-width: 420px) {
    top: 80px;
    left: 80px;
    right: 5px;
    bottom: 10px;
  }
`;

const Box = styled.div`
  position: absolute;
  left: 17.5px;
  right: 17.5px;
  top: 15px;
  bottom: 15px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 576px) {
    left: 12.5px;
    right: 12.5px;
    top: 10px;
    bottom: 10px;
  }

  @media screen and (max-width: 420px) {
    left: 7.5px;
    right: 7.5px;
    top: 5px;
    bottom: 5px;
  }
`;

const Calendar = () => {
  const { training } = useContext(AppContext);

  return (
    <Wrapper>
      <Box>
        {training.data.map((item, index, array) => {
          if (
            index !== 0 &&
            array[index].date.substring(0, 10) === array[index - 1].date.substring(0, 10)
          ) {
            return <TrainingBox item={item} key={item._id} />;
          }
          return <TrainingBoxWithDate item={item} key={item._id} />;
        })}
      </Box>
    </Wrapper>
  );
};

export default Calendar;
