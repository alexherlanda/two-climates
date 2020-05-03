import axios from 'axios';

//ERROR HANDLER
function errorHandling(err) {
  console.log('err:>> ', err.response);
  
}

// GET REQUEST
export function getRequest(config) {
  axios({
    method: 'GET',
    ...config,
  })
    .then((res) => console.log('res :>> ', res))
    .catch((err) => errorHandling(err));
}

// POST  REQUEST
export function postRequest(config) {
  axios({
    method: 'POST',
    ...config,
  })
    .then((res) => console.log('res :>> ', res))
    .catch((err) => console.log('err :>> ', err));
}

// PUT  REQUEST
export function putRequest(config) {
  axios({
    method: 'PUT',
    ...config,
  })
    .then((res) => console.log('res :>> ', res))
    .catch((err) => console.log('err :>> ', err));
}

// DELETE  REQUEST
export function deleteRequest(config) {
  axios({
    method: 'PUT',
    ...config,
  })
    .then((res) => console.log('res :>> ', res))
    .catch((err) => console.log('err :>> ', err));
}

//INTERCEPT REQUEST
axios.interceptors.request.use(
  (config) => {
    console.log('config.method :>> ', config.method.toUpperCase());
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
