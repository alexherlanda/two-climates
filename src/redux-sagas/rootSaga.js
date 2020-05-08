import { fork, all } from 'redux-saga/effects';
import * as climateCardsSagas from '../redux-sagas/climateCardsSagas';

export default function* rootSaga() {
  yield all([...Object.values(climateCardsSagas)].map(fork));
}
