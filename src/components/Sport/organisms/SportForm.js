import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import AppContext from 'context';
import { app } from 'data/value';
import { training as trainingRoute } from 'data/api_routes';
import { colorWithOpacity, white, blue, green, orange, lightRed } from 'styled/colors';
import getDataFromAPI from 'helpers/api_functions';
import { calculateCalories, removeFirstZero } from 'helpers/functions';
import FormInput from '../molecules/FormInput';
import FormButton from '../atoms/FormButton';
import IntensityButton from '../atoms/IntensityButton';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 6px 5px 6px 6px;
  background-color: ${colorWithOpacity(white, 0.2)};
  border-left: 2px solid ${blue};

  @media screen and (max-width: 992px) {
    padding: 4px 4px 4px 5px;
  }

  @media screen and (max-width: 576px) {
    padding: 2px 2px 2px 3px;
  }

  @media screen and (max-width: 420px) {
    padding: 0 1px 0 2px;
  }
`;

const SportForm = () => {
  const { training, user, setErrorBar, userDetails, setTraining } = useContext(AppContext);
  const [trainingTime, setTrainingTime] = useState('0');
  const [intensityButtonColor, setIntensityButtonColor] = useState(orange);

  const handleInputChange = (e) => {
    if (Number.isNaN(Number(e.target.value))) {
      setTrainingTime((prevState) => prevState);
    } else {
      setTrainingTime(removeFirstZero(e.target.value));
    }
  };

  const intensityButtonOnClick = () => {
    if (intensityButtonColor === orange) {
      setIntensityButtonColor(lightRed);
    } else if (intensityButtonColor === lightRed) {
      setIntensityButtonColor(green);
    } else {
      setIntensityButtonColor(orange);
    }
  };

  const setIntensity = () => {
    if (intensityButtonColor === green) {
      return training.sport.low;
    }
    if (intensityButtonColor === lightRed) {
      return training.sport.high;
    }
    return 1;
  };

  const errorFunction = (errorText) => {
    setErrorBar({ visibility: true, text: errorText });
    setTimeout(() => setErrorBar({ visibility: false, text: '' }), 3000);
  };

  const checkStatus = (data) => {
    const { status, training: trainingData } = data;

    if (status === 1) {
      setTraining((prevState) => ({ ...prevState, data: [trainingData, ...prevState.data] }));
    } else if (status === 2) {
      errorFunction(app.error.addTraingin);
    } else if (status === 3) {
      errorFunction(app.error.server);
    }
  };

  const handleInputOnSubmit = (e) => {
    e.preventDefault();

    getDataFromAPI(
      trainingRoute.add,
      {
        training: {
          userId: user._id,
          sport: training.sport.name,
          kcal: calculateCalories(
            trainingTime,
            training.sport.kcal,
            userDetails.data.weight,
            userDetails.bmi,
            setIntensity(),
          ),
          time: trainingTime,
        },
      },
      checkStatus,
      () => errorFunction(app.error.addTraingin),
      localStorage.getItem('userToken'),
    );

    setTrainingTime('0');
  };

  useEffect(() => {
    setTrainingTime('0');
  }, [training.sport]);

  return (
    <Wrapper>
      {training.sport.high && (
        <IntensityButton onClick={intensityButtonOnClick} color={intensityButtonColor} />
      )}
      <Form autoComplete="off" onSubmit={(e) => handleInputOnSubmit(e)}>
        <FormInput
          onChange={(e) => handleInputChange(e)}
          value={trainingTime}
          name="trainingTime"
          label="training time"
        />
        <FormButton disabled={!trainingTime} />
      </Form>
    </Wrapper>
  );
};

export default SportForm;
