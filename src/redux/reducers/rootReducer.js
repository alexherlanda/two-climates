import { combineReducers } from 'redux';
import intialStore from '../initialState';
import climateCardsReducer from '../reducers/climateCardsReducer';

const appReducer = combineReducers({
  climateCards: climateCardsReducer,
});

const rootReducer = (state, action) => {
  state = intialStore;
  return appReducer(state, action);
};

export default rootReducer;
