import axios from 'axios';
import url from 'data/url';

const setUrlAPI = (source) => `${url}${source}`;

const getDataFromAPI = (route, item, dataFunc, errFunc) => {
  axios
    .post(setUrlAPI(route), item, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((result) => dataFunc(result.data))
    .catch(() => errFunc());
};

export default getDataFromAPI;
