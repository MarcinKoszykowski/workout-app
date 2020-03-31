import axios from 'axios';
import url from 'data/url';

const setUrlAPI = (source) => `${url}${source}`;

const getDataFromAPI = (route, item, dataFunc, errFunc, token = '') => {
  axios
    .post(setUrlAPI(route), item, {
      headers: {
        'content-type': 'application/json',
        'access-token': token,
      },
    })
    .then((result) => dataFunc(result.data))
    .catch(() => errFunc());
};

export default getDataFromAPI;
