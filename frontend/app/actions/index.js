// import axios from 'axios';

// action types
export const GET_ALL_POKEMON = 'GET_ALL_POKEMON';
export const GET_ONE_POK_INFO = 'GET_ONE_POK_INFO';

// action creators
export const getAllPokemon = pokArray => ({
  type: GET_ALL_POKEMON,
  payload: pokArray,
});

export const getOnePokemon = pok => ({
  type: GET_ONE_POK_INFO,
  payload: pok,
});

/* thunks
export const getTheName = () => dispatch => (
  axios.get('/api')
    .then(res => dispatch(gotName(res.data)))
    .catch(err => console.error(err))
);
*/
