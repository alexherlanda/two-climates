import { getClimateByCityId } from '../services/openWheather';
import { takeLatest, put, call } from 'redux-saga/effects';
import {
  ACTIVE_PLACE_REQUEST,
  activePlaceSucess,
  activePlaceFail,
} from '../redux/actions/cardClimateActions';

function* requestActivePlaceAsync(action) {
  let dataToSave;
  try {
    const response = yield call(getClimateByCityId, { id: 3979654 });
    if (typeof response !== 'undefined' && response.status === 200) {
      dataToSave = {
        mainCard: {
          ...response.data.weather[0],
        },
        dataGrid: {
          humidity: response.data.main.humidity,
          sunrise: response.data.sys.sunrise,
          sunset: response.data.sys.sunrise,
          temp_min: response.data.main.temp_min,
          tempMax: response.data.main.temp_max,
        },
      };
      console.log('dataToSave :>> ', dataToSave);
      yield put(
        activePlaceSucess({ cardId: action.payload.cardId, data: dataToSave })
      );
    } else {
      yield put(activePlaceFail({ cardId: action.payload.cardId }));
    }
  } catch (error) {
    yield put(activePlaceFail({ cardId: action.payload.cardId }));
    console.log('error', error);
  }
}

export function* watchRequestMarkets() {
  console.log('ACTIVE_PLACE_REQUEST :>> ', ACTIVE_PLACE_REQUEST);
  yield takeLatest(ACTIVE_PLACE_REQUEST, requestActivePlaceAsync);
}
