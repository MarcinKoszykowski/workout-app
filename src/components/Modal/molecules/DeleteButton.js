import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from 'context';
import { training as trainingRoute } from 'data/api_routes';
import { app } from 'data/value';
import { functionWithTimeout } from 'helpers/functions';
import getDataFromAPI from 'helpers/api_functions';
import { red } from 'styled/colors';
import trashIcon from 'assets/icons/trash.svg';
import Button from '../atoms/Button';

const StyledButton = styled(Button)`
  @media screen and (max-width: 576px) {
    height: 50px;
    width: 50px;
  }

  @media screen and (max-width: 420px) {
    height: 45px;
    width: 45px;
  }
`;

const DeleteButton = () => {
  const { training, setErrorBar, setTraining, setVisibility } = useContext(AppContext);

  const errorFunction = (errorText) => {
    functionWithTimeout(
      setErrorBar,
      { visibility: true, text: errorText },
      { visibility: false, text: '' },
      3000,
    );
  };

  const checkStatus = (data) => {
    const { status } = data;

    if (status === 2) {
      errorFunction(app.error.delete);
    } else if (status === 3) {
      errorFunction(app.error.server);
    }
  };

  const deleteButtonOnClick = () => {
    const array = training.data;
    array.map((arrayItem, index) =>
      arrayItem._id === training.sportId ? array.splice(index, 1) : null,
    );

    setTraining((prevState) => ({ ...prevState, data: array, delete: true }));
    getDataFromAPI(
      trainingRoute.delete,
      { id: training.sportId },
      checkStatus,
      () => errorFunction(app.error.delete),
      localStorage.getItem('userToken'),
    );
    setVisibility((prevState) => ({ ...prevState, modal: false }));
  };

  return <StyledButton buttonColor={red} icon={trashIcon} onClick={deleteButtonOnClick} />;
};

export default DeleteButton;
