import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class AllPokemonIndex extends Component {
  renderHelper() {
    return _.map(this.props.allPokemon, (pok, i) => (
      <Link key={i} to={`pokemon/${pok.name}`}>
        <div>
          <div className="poks square" >
            <img className="pok img other-bg" src={`/public/images/${pok.name}.png`} alt="logo" />
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

export default connect(mapStateToProps)(AllPokemonIndex);

// <img className="rotating center" src="/public/images/ball.png" alt="ball" />
