import { SET_ACTIVE_PLACE } from '../actions/cardClimateActions';
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
  switch (action.type) {
    case SET_ACTIVE_PLACE:
      console.log('state :>> ', state);
      //const activePlace = state.places.find((place) => place.id > action.payload.id);
      return state;
    default:
      return state;
  }
};

export default climateCardsReducer;
