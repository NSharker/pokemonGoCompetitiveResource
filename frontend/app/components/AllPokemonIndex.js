import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadAllPokemon } from '../actions';

class AllPokemonIndex extends Component {
  componentDidMount() {
    this.props.loadAllPokemon();
  }

  renderHelper() {
    return _.map(this.props.allPokemon, (pok, i) => (
      <Link key={i} to={`pokemon/${pok.dex}`}>
        <div>
          <div className="poks square" >
            <img className="pok img other-bg" src={`/public/images/${pok.dex}.png`} alt="logo" />
          </div>
          <div className="poks label">#{pok.dex} {pok.name}</div>
        </div>
      </Link>
    ));
  }

  render() {
    return (
      <div className="poks-grid">
        <div className="poks">
          {this.renderHelper()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ allPokemon }) => ({ allPokemon });

export default connect(mapStateToProps, { loadAllPokemon })(AllPokemonIndex);

