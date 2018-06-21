import axios from 'axios';

// action types
export const GET_ALL_POKEMON = 'GET_ALL_POKEMON';
export const GET_ONE_POK_INFO = 'GET_ONE_POK_INFO';
export const GET_COMMENTS = 'GET_COMMENTS';
export const CREATE_COMMENT = 'CREATE_COMMENT';

// action creators
export const getAllPokemon = pokArray => ({
  type: GET_ALL_POKEMON,
  payload: pokArray,
});

export const getOnePokemon = pok => ({
  type: GET_ONE_POK_INFO,
  payload: pok,
});

export const getComments = comments => ({
  type: GET_COMMENTS,
  payload: comments,
});

export const createComment = () => ({
  type: CREATE_COMMENT,
});

// thunks
export const loadAllPokemon = () => dispatch => (
  axios.get('http://146.95.217.241:3000/api/v1/pokemon')
    .then(res => dispatch(getAllPokemon(res.data.data)))
    .catch(err => console.error(err))
);

export const loadOnePokemon = dex => dispatch => (
  axios.get(`http://146.95.217.241:3000/api/v1/pokemon/${dex}`)
    .then((res) => {
      dispatch(getOnePokemon(res.data.data));
      return res;
    })
    .then(res => dispatch(getComments(res.data.comments)))
    .catch(err => console.error(err))
);

export const sendComment = (commentObject, callback) => dispatch => (
  axios.post('/sentiment', {
    text: commentObject.content,
  })
    .then((res) => {
      callback();
      return res.data;
    })
    .then((data) => {
      const postThis = {};
      postThis.author = commentObject.author;
      postThis.content = commentObject.content;
      postThis.sentiment = data.sentiment;
      postThis.pokemon_id = 2;
      return axios.post('http://146.95.217.241:3000/api/v1/comments', postThis);
    })
    .then(res => console.log(res.data))
    .catch(err => console.error(err))
);

