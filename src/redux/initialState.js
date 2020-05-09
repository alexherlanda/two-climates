import { alexisPlaces, itzelPlaces } from '../models/index';

export default {
  climateCards: [
    {
      id: '1',
      isLoading: false,
      owner: 'Alexis',
      activePlaceId: '',
      data: false,
      places: alexisPlaces,
    },
    {
      id: '2',
      isLoading: false,
      owner: 'Itzel',
      activePlaceId: '',
      data: false,
      places: itzelPlaces,
    },
  ],
};
