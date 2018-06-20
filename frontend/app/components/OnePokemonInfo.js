import React, { Component } from 'react';
import { connect } from 'react-redux';

class OnePokemonInfo extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { thePokemon } = this.props;
    return (
      <div className="one-pok-top">
        <div className="one-pok-top box">
          <img className="other-bg" src={`/public/images/${thePokemon.name}.png`} alt="logo" />
          <div>
            <div className="other-bg"> #{thePokemon.dex} {thePokemon.name} </div>
            <div className="other-bg"> Max CP: {thePokemon.maxcp} </div>
            <div className="other-bg"> Attack: {thePokemon.attack} </div>
            <div className="other-bg"> Defense: {thePokemon.defense} </div>
            <div className="other-bg"> Stamina: {thePokemon.stamina} </div>
            <div className="other-bg"> Type: {thePokemon.types} </div>
            <div className="other-bg"> Description: {thePokemon.description} </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ thePokemon }) => ({ thePokemon });

export default connect(mapStateToProps)(OnePokemonInfo);
