import { getClimateByCityId } from '../services/openWheather';
import { takeEvery, put, call } from 'redux-saga/effects';
import {
  ACTIVE_PLACE_REQUEST,
  activePlaceSucess,
  activePlaceFail,
} from '../redux/actions/cardClimateActions';

function validateData(value) {
  let valueToAssing;
  if (typeof value === 'undefined') {
    valueToAssing = false;
  } else {
    valueToAssing = value;
  }
  return valueToAssing;
}

function removeDecimals(value) {
  let formatedNumber = Number(value);
  return formatedNumber.toFixed(0);
}

function* requestActivePlaceAsync(action) {
  let dataToSave;
  try {
    const response = yield call(getClimateByCityId, { id: action.payload.cityId });
    if (typeof response !== 'undefined' && response.status === 200) {
      dataToSave = {
        mainCard: {
          ...response.data.weather[0],
          temp: validateData(removeDecimals(response.data.main.temp)),
        },
        dataGrid: {
          rain: validateData(response.data.rain),
          humidity: validateData(removeDecimals(response.data.main.humidity)),
          sunrise: validateData(response.data.sys.sunrise),
          sunset: validateData(response.data.sys.sunset),
          tempMin: validateData(removeDecimals(response.data.main.temp_min)),
          tempMax: validateData(removeDecimals(response.data.main.temp_max)),
        },
      };
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
  yield takeEvery(ACTIVE_PLACE_REQUEST, requestActivePlaceAsync);
}
