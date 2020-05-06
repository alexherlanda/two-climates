import {
  SET_ACTIVE_PLACE,
  ACTIVE_PLACE_REQUEST,
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
  switch (action.type) {
    case SET_ACTIVE_PLACE:
      console.log('state :>> ', state);
      //const activePlace = state.places.find((place) => place.id > action.payload.id);
      return state;

    case ACTIVE_PLACE_REQUEST:
      const { payload } = action;
      const { cardId } = payload;
      const foundCard = state.find((card) => card.id === cardId);
      const foundCardIndex = state.findIndex((card) => card.id === cardId);
      const oldState = state;
      oldState.splice(foundCardIndex, 1);
      foundCard.isLoading = true;
      const newState = [...oldState, foundCard];
      return newState;
    default:
      return state;
  }
};

export default climateCardsReducer;
