import { green, orange, lightRed, yellow } from 'styled/colors';

const checkEditInUserForm = (formUser, details) =>
  formUser.age === details.age &&
  formUser.height === details.height &&
  formUser.weight === details.weight;

const calculateBMI = (height, weight) => ((weight / (height * height)) * 10000).toFixed(2);

const calculateIndexBMI = (bmi) => {
  if (bmi < 16) {
    return 0.95;
  }
  if (bmi >= 16 && bmi < 18.5) {
    return 0.975;
  }
  if (bmi >= 18.5 && bmi < 25) {
    return 1;
  }
  if (bmi >= 25 && bmi < 30) {
    return 1.025;
  }
  if (bmi >= 30 && bmi < 35) {
    return 1.05;
  }
  if (bmi >= 35 && bmi < 40) {
    return 1.075;
  }
  return 1.1;
};

const setColorBMI = (bmi) => {
  if (bmi < 18.5) {
    return yellow;
  }
  if (bmi >= 18.5 && bmi < 25) {
    return green;
  }
  if (bmi >= 25 && bmi < 30) {
    return orange;
  }
  return lightRed;
};

const calculateCalories = (time, kcal, weight, bmi, intensity = 1) => {
  const indexBMI = calculateIndexBMI(bmi);

  return ((time / 60) * kcal * weight * indexBMI * intensity).toFixed(2);
};

const removeWhitespace = (value) => value.replace(' ', '');
const removeFirstZero = (value) => {
  if (value.length > 1 && value.charAt(0) === '0') {
    return value.replace(/^0+/, '');
  }
  return value;
};

const functionWithTimeout = (func, value, timeoutValue, duration) => {
  func(value);
  setTimeout(() => func(timeoutValue), duration);
};

export {
  setColorBMI,
  removeWhitespace,
  removeFirstZero,
  checkEditInUserForm,
  calculateBMI,
  calculateIndexBMI,
  calculateCalories,
  functionWithTimeout,
};
