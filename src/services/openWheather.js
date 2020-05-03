import { getRequest } from './requests';

export function getPlaceClimate(params) {
  getRequest({
    url: 'https://jsonplaceholder.typicode.com/todoss',
    params: params,
  });
}
