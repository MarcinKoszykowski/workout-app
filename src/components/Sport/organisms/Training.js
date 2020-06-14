import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from 'context';
import { colorWithOpacity, white, blue } from 'styled/colors';
import Modal from 'components/Modal/Modal';
import TrainingBox from '../molecules/TrainingBox';

const Wrapper = styled.div`
  position: fixed;
  top: 120px;
  bottom: 30px;
  left: 230px;
  right: 180px;
  min-width: 225px;
  background-color: ${colorWithOpacity(white, 0.4)};

  @media screen and (max-width: 992px) {
    top: 115px;
    left: 200px;
    right: 150px;
  }

  @media screen and (max-width: 768px) {
    top: 170px;
    left: 170px;
    right: 30px;
    bottom: 20px;
  }

  @media screen and (max-width: 576px) {
    top: 140px;
    left: 120px;
    right: 15px;
    bottom: 15px;
  }

  @media screen and (max-width: 420px) {
    top: 122.5px;
    left: 85px;
    right: 5px;
  }

  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 25%;
  }

  &::after {
    top: 50%;
    left: 0;
    bottom: 0;
    border-left: 3px solid ${blue};
    border-bottom: 3px solid ${blue};
  }

  &::before {
    top: 0;
    right: 0;
    bottom: 50%;
    border-right: 3px solid ${blue};
    border-top: 3px solid ${blue};
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

const Training = () => {
  const { training } = useContext(AppContext);

  return (
    <Wrapper>
      <Box>
        {training.sportData.map((item) => (
          <TrainingBox item={item} key={item._id} />
        ))}
      </Box>
      <Modal />
    </Wrapper>
  );
};

export default Training;
