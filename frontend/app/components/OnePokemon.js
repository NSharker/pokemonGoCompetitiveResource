import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendComment } from '../actions';
import CommentWindow from './CommentWindow';
import OnePokemonInfo from './OnePokemonInfo';

class OnePokemon extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.sendComment({ content: 'Pokemon is so 2001. I hate it' });
  }

  render() {
    // const { thePokemon } = this.props;
    return (
      <div className="one-pok-main">
        <OnePokemonInfo />
        <CommentWindow />
        <button onClick={this.handleClick}> Get sentiment </button>
      </div>
    );
  }
}

const mapStateToProps = ({ thePokemon }) => ({ thePokemon });

export default connect(mapStateToProps, { sendComment })(OnePokemon);
