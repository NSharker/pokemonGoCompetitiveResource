import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import allPokemonReducer from './reducer_all_pokemon';
import onePokemonReducer from './reducer_one_pokemon';
import commentsReducer from './reducer_comments';

const rootReducer = combineReducers({
  allPokemon: allPokemonReducer,
  thePokemon: onePokemonReducer,
  form: formReducer,
  comments: commentsReducer,
});

export default rootReducer;
