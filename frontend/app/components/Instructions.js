import React from 'react';
import { connect } from 'react-redux';

const Instructions = ({ thePokemon }) => (
  <div className="instr">
    {!thePokemon.id ? 'Select a Pokemon to discuss and share tips!' : ''}
  </div>
);

const mapStateToProps = ({ thePokemon }) => ({ thePokemon });

export default connect(mapStateToProps)(Instructions);
