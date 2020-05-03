import { fork, all } from 'redux-saga/effects';
import * as helloWorldSagas from '../redux-sagas/helloWorldSagas';

export default function* rootSaga() {
  yield all([...Object.values(helloWorldSagas)].map(fork));
}
