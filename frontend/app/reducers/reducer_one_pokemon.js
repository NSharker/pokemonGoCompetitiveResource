import { GET_ONE_POK_INFO, CLEAR_ONE_POKEMON } from '../actions';

// const initialState = {
//   dex: '001',
//   attack: '150',
//   defense: '120',
//   stamina: '80',
//   types: 'rock',
//   name: 'Sudowoodo',
//   maxcp: '1500',
//   description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
// };

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ONE_POK_INFO:
      return action.payload;
    case CLEAR_ONE_POKEMON:
      return {};
    default:
      return state;
  }
};
