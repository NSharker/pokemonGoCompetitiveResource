import { combineReducers } from 'redux';
import allPokemonReducer from './reducer_all_pokemon';
import onePokemonReducer from './reducer_one_pokemon';

const rootReducer = combineReducers({
  allPokemon: allPokemonReducer,
  thePokemon: onePokemonReducer,
});

export default rootReducer;
