import React, { useState, useContext } from 'react';
import { useDidMount } from 'beautiful-react-hooks';
import styled from 'styled-components';
import AppContext from 'context';
import getDataFromAPI from 'helpers/api_functions';
import { calculateBMI, checkEditInUserForm } from 'helpers/functions';
import { setDetailsInLocalStorage, setBMIInLocalStorage } from 'helpers/local_storage_functions';
import { user as userValue } from 'data/value';
import { details as detailsRoute } from 'data/api_routes';
import { blue } from 'styled/colors';
import FormInput from '../molecules/FormInput';
import Button from '../atoms/Button';

const Form = styled.form`
  position: relative;
  margin: auto;
  width: 100%;
  padding: 25px 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 576px) {
    padding: 22.5px 0 25px;
  }

  @media screen and (max-width: 420px) {
    padding: 20px 0 20px;
  }
`;

const FormButton = styled(Button)`
  margin-top: 40px;
  background-color: ${blue};
  border-color: ${blue};

  @media screen and (min-width: 1024px) {
    &:hover {
      color: ${blue};
    }

    &:active {
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 1024px) {
    &:active {
      color: ${blue};
    }
  }

  @media screen and (max-width: 576px) {
    margin-top: 30px;
  }

  @media screen and (max-width: 420px) {
    margin-top: 20px;
  }
`;

const UserForm = () => {
  const { details, setDetails, user, setUserBMI } = useContext(AppContext);

  const {
    button: { save },
    form: { age, height, weight },
  } = userValue;

  const [formUser, setFormUser] = useState({
    age: 0,
    height: 0,
    weight: 0,
  });

  const handleInputChange = (e) => {
    const value = {
      ...formUser,
      [e.target.name]: e.target.value,
    };
    setFormUser(value);
  };

  const setValue = (value) => value || 0;

  const setUserDetails = () => {
    setFormUser({
      age: setValue(details.age),
      height: setValue(details.height),
      weight: setValue(details.weight),
    });
  };

  const checkStatus = (data) => {
    const { status } = data;

    if (status === 1) {
      setDetails({ ...formUser });
      setDetailsInLocalStorage(formUser);
      setUserBMI(calculateBMI(formUser.height, formUser.weight));
      setBMIInLocalStorage(calculateBMI(formUser.height, formUser.weight));
    } else if (status === 2) {
      console.log('error'); // eslint-disable-line
    }
  };

  const handleInputOnSubmit = (e) => {
    e.preventDefault();

    if (!checkEditInUserForm(formUser, details)) {
      getDataFromAPI(
        detailsRoute.add,
        {
          userId: user._id, // eslint-disable-line
          data: {
            age: formUser.age,
            height: formUser.height,
            weight: formUser.weight,
          },
        },
        checkStatus,
        () => console.log('error'), // eslint-disable-line
      );
    }
  };

  useDidMount(() => {
    setUserDetails();
  });

  return (
    <Form autoComplete="off" onSubmit={(e) => handleInputOnSubmit(e)}>
      <FormInput
        onChange={(e) => handleInputChange(e)}
        max={age.max}
        value={Number(formUser.age)}
        name={age.name}
        label={age.name}
      />
      <FormInput
        onChange={(e) => handleInputChange(e)}
        max={height.max}
        value={Number(formUser.height)}
        name={height.name}
        label={`${height.name} [cm]`}
      />
      <FormInput
        onChange={(e) => handleInputChange(e)}
        max={weight.max}
        value={Number(formUser.weight)}
        name={weight.name}
        label={`${weight.name} [kg]`}
      />
      <FormButton>{save}</FormButton>
    </Form>
  );
};

export default UserForm;
