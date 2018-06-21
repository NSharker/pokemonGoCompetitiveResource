import axios from 'axios';

// action types
export const GET_ALL_POKEMON = 'GET_ALL_POKEMON';
export const GET_ONE_POK_INFO = 'GET_ONE_POK_INFO';
export const GET_COMMENTS = 'GET_COMMENTS';

// action creators
export const updateAllPokemon = pokArray => ({
  type: GET_ALL_POKEMON,
  payload: pokArray,
});

export const updateOnePokemon = pok => ({
  type: GET_ONE_POK_INFO,
  payload: pok,
});

export const updateComments = comments => ({
  type: GET_COMMENTS,
  payload: comments,
});

// thunks
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
      return axios.post('/sentiment/lol', postThis);
    })
    .then(res => console.log(res.data))
    .catch(err => console.error(err))

  // axios.post('/api')
  //   .then(res => dispatch(getOnePokemon(res.data)))
  //   .catch(err => console.error(err))
);

