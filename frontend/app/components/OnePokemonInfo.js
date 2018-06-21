import React from 'react';
import { connect } from 'react-redux';

const OnePokemonInfo = ({ thePokemon }) => (
  <div className="one-pok-top">
    <div className="one-pok-top box">
      <img className="other-bg" src={`/public/images/${thePokemon.dex}.png`} alt="logo" />
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

const mapStateToProps = ({ thePokemon }) => ({ thePokemon });

export default connect(mapStateToProps)(OnePokemonInfo);
