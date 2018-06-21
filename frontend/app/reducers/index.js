import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import allPokemonReducer from './reducer_all_pokemon';
import onePokemonReducer from './reducer_one_pokemon';

const rootReducer = combineReducers({
  allPokemon: allPokemonReducer,
  thePokemon: onePokemonReducer,
  form: formReducer,
});

export default rootReducer;
