import { GET_ALL_POKEMON } from '../actions';

// const initialState = [{ dex: '001', name: 'sudowoodo' },
//   { dex: '002', name: 'sudowoodo' },
//   { dex: '003', name: 'sudowoodo' },
//   { dex: '004', name: 'sudowoodo' },
//   { dex: '005', name: 'sudowoodo' },
//   { dex: '006', name: 'sudowoodo' },
//   { dex: '007', name: 'sudowoodo' },
//   { dex: '008', name: 'sudowoodo' },
//   { dex: '009', name: 'sudowoodo' },
// ];

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POKEMON:
      return action.payload;
    default:
      return state;
  }
};
