import { getClimateByCityId } from '../services/openWheather';
import { takeLatest, put, call } from 'redux-saga/effects';
import {
  ACTIVE_PLACE_REQUEST,
  activePlaceSucess,
  activePlaceFail,
} from '../redux/actions/cardClimateActions';

function* requestActivePlaceAsync() {
  try {
    const response = yield call(getClimateByCityId, { id: 3979654 });
    if (typeof response !== 'undefined' && response.status === 200) {
      yield put(activePlaceSucess(response.data.data));
    } else {
      yield put(activePlaceFail());
    }
  } catch (error) {
    yield put(activePlaceFail());
    console.log('error', error);
  }
}

export function* watchRequestMarkets() {
  console.log('ACTIVE_PLACE_REQUEST :>> ', ACTIVE_PLACE_REQUEST);
  yield takeLatest(ACTIVE_PLACE_REQUEST, requestActivePlaceAsync);
}
