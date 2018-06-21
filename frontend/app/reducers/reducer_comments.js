import { GET_COMMENTS } from '../actions';

const initialState = [{ author: 'Nikki', content: 'so awesome!', sentiment: '+' },
  { author: 'NotNikki', content: 'this totally sux...', sentiment: '-' },
  { author: 'Anonymous', content: 'meh', sentiment: '~' },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return action.payload;
    default:
      return state;
  }
};
