import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap';
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
            <Image className="other-bg" src={`/public/images/${pok.dex}.png`} alt="logo" responsive />
          </div>
          <div className="poks lab">
            <div>#{pok.dex} {pok.name}</div>
          </div>
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

