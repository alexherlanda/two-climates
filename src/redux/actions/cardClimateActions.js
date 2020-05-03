export const SET_ACTIVE_PLACE = 'SET_ACTIVE_PLACE';

export const ACTIVE_PLACE_REQUEST = 'ACTIVE_PLACE_REQUEST';
export const ACTIVE_PLACE_SUCESS = 'ACTIVE_PLACE_SUCESS';
export const ACTIVE_PLACE_FAIL = 'ACTIVE_PLACE_FAIL';

export const setActivePlace = (payload) => ({
  type: SET_ACTIVE_PLACE,
  payload: payload,
});

export const activePlaceRequest = (payload) => ({
  type: ACTIVE_PLACE_REQUEST,
  payload: payload,
});

export const activePlaceSucess = (payload) => ({
  type: ACTIVE_PLACE_SUCESS,
  payload: payload,
});

export const activePlaceFail = (payload) => ({
  type: ACTIVE_PLACE_FAIL,
  payload: payload,
});
