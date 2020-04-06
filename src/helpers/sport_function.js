const setSportTitle = (title) => title.replace('-', ' ');

const getTrainingBySportName = (array, sport) => {
  const arrayTraining = [];
  array.map((item) => (item.sport === sport.name ? arrayTraining.push(item) : null));

  return arrayTraining;
};

const setSportDate = (date) =>
  `${date.substring(8, 10)}.${date.substring(5, 7)}.${date.substring(0, 4)}`;
const setSportTime = (time) => `${time} min`;
const setSportKcal = (kcal) => `${kcal.toFixed(2)} kcal`;

export { setSportTitle, getTrainingBySportName, setSportDate, setSportTime, setSportKcal };
