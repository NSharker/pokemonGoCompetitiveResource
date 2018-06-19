import { GET_ONE_POK_INFO } from '../actions';

const initialState = {
  dex: '001',
  attack: '150',
  defense: '120',
  stamina: '80',
  types: 'rock',
  name: 'Sudowoodo',
  maxcp: '1500',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ONE_POK_INFO:
      return action.payload;
    default:
      return state;
  }
};
