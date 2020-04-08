import React, { useContext, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import AppContext from 'context';
import { setSportTitle, getTrainingBySportName } from 'helpers/sport_function';
import Training from './organisms/Training';
import SportForm from './organisms/SportForm';
import Title from './atoms/Title';

const Wrapper = styled.div`
  padding: 40px 180px 0 230px;
  min-width: 225px;
  z-index: 10;

  @media screen and (max-width: 992px) {
    padding: 45px 150px 0 200px;
  }

  @media screen and (max-width: 768px) {
    padding: 120px 30px 0 170px;
  }

  @media screen and (max-width: 576px) {
    padding: 102.5px 15px 0 120px;
  }

  @media screen and (max-width: 420px) {
    padding: 92.5px 5px 0 85px;
  }
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Sport = () => {
  const { training, setTraining } = useContext(AppContext);

  const setTrainingData = () =>
    setTraining((prevState) => ({
      ...prevState,
      sportData: getTrainingBySportName(training.data, training.sport),
      delete: false,
    }));

  const handleSetTrainingData = useCallback(setTrainingData, [
    training.data,
    training.sport,
    training.delete,
  ]);

  useEffect(() => {
    handleSetTrainingData();
  }, [handleSetTrainingData]);

  return (
    <Wrapper>
      <TopWrapper>
        <Title>{setSportTitle(training.sport.name)}</Title>
        <SportForm />
      </TopWrapper>
      <Training />
    </Wrapper>
  );
};

export default Sport;
