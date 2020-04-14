import React, { useState, useContext, useRef } from 'react';
import { useDidMount, useWillUnmount } from 'beautiful-react-hooks';
import styled from 'styled-components';
import AppContext from 'context';
import getDataFromAPI from 'helpers/api_functions';
import {
  calculateBMI,
  checkEditInUserForm,
  removeFirstZero,
  functionWithTimeout,
} from 'helpers/functions';
import { setDetailsInLocalStorage, setBMIInLocalStorage } from 'helpers/local_storage_functions';
import { user as userValue, app } from 'data/value';
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
  const { userDetails, user, setErrorBar, setUserDetails } = useContext(AppContext);

  const {
    button: { save },
    form: { age, height, weight },
  } = userValue;

  const [formUser, setFormUser] = useState({
    age: '0',
    height: '0',
    weight: '0',
  });
  const formRef = useRef();

  const handleInputChange = (e) => {
    if (Number.isNaN(Number(e.target.value))) {
      setFormUser((prevState) => prevState);
    } else {
      const value = {
        ...formUser,
        [e.target.name]: removeFirstZero(e.target.value),
      };
      setFormUser(value);
    }
  };

  const setUserData = () => {
    setFormUser((prevState) => ({
      age: userDetails.data.age ? userDetails.data.age.toString() : prevState.age,
      height: userDetails.data.height ? userDetails.data.height.toString() : prevState.height,
      weight: userDetails.data.weight ? userDetails.data.weight.toString() : prevState.weight,
    }));
  };

  const errorFunctions = (errorText) =>
    functionWithTimeout(
      setErrorBar,
      { visibility: true, text: errorText },
      { visibility: false, text: '' },
      3000,
    );

  const checkStatus = (data) => {
    const { status } = data;

    if (status === 1) {
      setDetailsInLocalStorage(formUser);
      setUserDetails((prevState) => ({
        ...prevState,
        data: { ...formUser },
        bmi: calculateBMI(formUser.height, formUser.weight),
      }));
      setBMIInLocalStorage(calculateBMI(formUser.height, formUser.weight));
    } else if (status === 2) {
      errorFunctions(app.error.addDetails);
    } else if (status === 3) {
      errorFunctions(app.error.server);
    }
  };

  const handleInputOnSubmit = (e) => {
    e.preventDefault();

    if (!checkEditInUserForm(formUser, userDetails.data)) {
      getDataFromAPI(
        detailsRoute.add,
        {
          userId: user._id,
          data: {
            age: formUser.age,
            height: formUser.height,
            weight: formUser.weight,
          },
        },
        checkStatus,
        () => errorFunctions(app.error.server),
        localStorage.getItem('userToken'),
      );
    }
  };

  useDidMount(() => {
    setUserData();
    if (formRef.current) {
      formRef.current.addEventListener('invalid', (e) => e.preventDefault(), true);
    }
  });

  useWillUnmount(() => {
    formRef.current.removeEventListener('invalid', (e) => e.preventDefault(), true);
  });

  return (
    <Form ref={formRef} autoComplete="off" onSubmit={(e) => handleInputOnSubmit(e)}>
      <FormInput
        onChange={(e) => handleInputChange(e)}
        pattern={age.pattern}
        value={formUser.age}
        name={age.name}
        label={age.name}
        errorText={age.errorText}
      />
      <FormInput
        onChange={(e) => handleInputChange(e)}
        pattern={height.pattern}
        value={formUser.height}
        name={height.name}
        label={`${height.name} [cm]`}
        errorText={height.errorText}
      />
      <FormInput
        onChange={(e) => handleInputChange(e)}
        pattern={weight.pattern}
        value={formUser.weight}
        name={weight.name}
        label={`${weight.name} [kg]`}
        errorText={weight.errorText}
      />
      <FormButton>{save}</FormButton>
    </Form>
  );
};

export default UserForm;
