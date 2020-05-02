let initial = [
  { id: 'alexis', owner: 'Alexis Herlanda', cardPlaces: [], placeWheaterData: {} },
];

const visibilityFilter = (state = initial, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
