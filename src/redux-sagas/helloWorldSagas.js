import { getPlaceClimate } from '../services/openWheather';
import { call } from 'redux-saga/effects';

export function* requestRolesWorker() {
  yield call(getPlaceClimate, { _limit: 5 });
  yield console.log('Hello world');
}
