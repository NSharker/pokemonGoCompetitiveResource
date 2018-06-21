import React from 'react';
import CommentWindow from './CommentWindow';
import OnePokemonInfo from './OnePokemonInfo';
import CommentsDisplay from './CommentsDisplay';

const OnePokemonShow = () => (
  <div className="one-pok-main">
    <OnePokemonInfo />
    <CommentWindow />
    <CommentsDisplay />
  </div>
);

export default OnePokemonShow;

