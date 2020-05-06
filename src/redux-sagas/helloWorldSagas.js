import { getClimateByCityId } from '../services/openWheather';
import { call } from 'redux-saga/effects';

export function* requestRolesWorker() {
  yield call(getClimateByCityId, { id: 3979654 });
  yield console.log('Hello world');
}
