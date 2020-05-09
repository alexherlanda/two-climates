import {
  ACTIVE_PLACE_REQUEST,
  ACTIVE_PLACE_SUCESS,
  ACTIVE_PLACE_FAIL,
} from '../actions/cardClimateActions';
/**
 *  This app both ways of initializing Redux state.
 *  It has an initial state passed as the second argument of
 *  create store but each reducer has an initial state when there
 *  recive state as undefined.
 *
 */

let initial = [
  { id: 'alexis', owner: 'Alexis Herlanda', cardPlaces: [], placeWheaterData: {} },
];

const climateCardsReducer = (state = initial, action) => {
  let cardToApplyChanges = null;
  let oldState = null;
  let newState = null;
  switch (action.type) {
    case ACTIVE_PLACE_REQUEST:
      oldState = [...state];
      cardToApplyChanges = oldState.find(
        (card) => card.id === action.payload.cardId
      );
      newState = oldState.filter((card) => card.id !== action.payload.cardId);
      newState = [...newState, { ...cardToApplyChanges, isLoading: true }];
      newState.sort(function (a, b) {
        let result = 0;
        var keyA = a.id,
          keyB = b.id;
        // Compare
        if (keyA < keyB) result = -1;
        if (keyA > keyB) result = 1;
        return result;
      });
      return newState;

    case ACTIVE_PLACE_SUCESS:
      oldState = [...state];
      cardToApplyChanges = oldState.find(
        (card) => card.id === action.payload.cardId
      );
      newState = oldState.filter((card) => card.id !== action.payload.cardId);
      newState = [
        ...newState,
        {
          ...cardToApplyChanges,
          isLoading: false,
          data: action.payload.data,
        },
      ];
      newState.sort(function (a, b) {
        let result = 0;
        var keyA = a.id,
          keyB = b.id;
        // Compare
        if (keyA < keyB) result = -1;
        if (keyA > keyB) result = 1;
        return result;
      });

      return newState;

    case ACTIVE_PLACE_FAIL:
      oldState = [...state];
      cardToApplyChanges = oldState.find(
        (card) => card.id === action.payload.cardId
      );
      newState = oldState.filter((card) => card.id !== action.payload.cardId);
      newState = [
        ...newState,
        { ...cardToApplyChanges, isLoading: false, data: false },
      ];
      newState.sort(function (a, b) {
        let result = 0;
        var keyA = a.id,
          keyB = b.id;
        // Compare
        if (keyA < keyB) result = -1;
        if (keyA > keyB) result = 1;
        return result;
      });
      return newState;

    default:
      return state;
  }
};

export default climateCardsReducer;
