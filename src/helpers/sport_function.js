import { calculateIndexBMI } from './functions';

const setSportTitle = (title) => title.replace('-', ' ');

const getTrainingBySportName = (array, sport) => {
  const arrayTraining = [];
  array.map((item) => (item.sport === sport.name ? arrayTraining.push(item) : null));

  return arrayTraining;
};

const setSportDate = (date) =>
  `${date.substring(8, 10)}.${date.substring(5, 7)}.${date.substring(0, 4)}`;
const setSportTime = (time) => `${time} min`;
const setSportKcal = (kcal) => `${Math.round(kcal)} kcal`;

const calculateCalories = (time, kcal, weight, bmi, intensity = 1) => {
  const indexBMI = calculateIndexBMI(bmi);

  return ((time / 60) * kcal * weight * indexBMI * intensity).toFixed(2);
};

export {
  setSportTitle,
  getTrainingBySportName,
  setSportDate,
  setSportTime,
  setSportKcal,
  calculateCalories,
};
