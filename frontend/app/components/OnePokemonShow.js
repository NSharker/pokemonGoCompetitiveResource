import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentWindow from './CommentWindow';
import OnePokemonInfo from './OnePokemonInfo';
import CommentsDisplay from './CommentsDisplay';
import { loadOnePokemon } from '../actions';


class OnePokemonShow extends Component {
  componentDidMount() {
    const { dex } = this.props.match.params;
    this.props.loadOnePokemon(dex);
  }

  render() {
    return (
      <div className="one-pok-main">
        <OnePokemonInfo />
        <CommentWindow />
        <CommentsDisplay />
      </div>
    );
  }
}

export default connect(null, { loadOnePokemon })(OnePokemonShow);

