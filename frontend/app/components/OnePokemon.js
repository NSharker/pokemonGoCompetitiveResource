import React from 'react';
import { connect } from 'react-redux';

const OnePokemon = ({ thePokemon }) => (
  <div> hello {thePokemon.description} </div>
);

const mapStateToProps = ({ thePokemon }) => ({ thePokemon });

export default connect(mapStateToProps)(OnePokemon);
