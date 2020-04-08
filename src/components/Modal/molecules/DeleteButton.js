import React, { useContext } from 'react';
import AppContext from 'context';
import { training as trainingRoute } from 'data/api_routes';
import getDataFromAPI from 'helpers/api_functions';
import { red } from 'styled/colors';
import trashIcon from 'assets/icons/trash.svg';
import Button from '../atoms/Button';

const DeleteButton = () => {
  const { training, setTraining, setVisibility } = useContext(AppContext);

  const checkStatus = (data) => {
    const { status } = data;

    console.log(status); // eslint-disable-line
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
      () => console.log('error'), // eslint-disable-line
      localStorage.getItem('userToken'),
    );
    setVisibility((prevState) => ({ ...prevState, modal: false }));
  };

  return <Button buttonColor={red} icon={trashIcon} onClick={deleteButtonOnClick} />;
};

export default DeleteButton;
