import { combineReducers } from 'redux';
import climateCardsReducer from '../reducers/climateCardsReducer';

const rootReducer = combineReducers({
  climateCards: climateCardsReducer,
});

export default rootReducer;
