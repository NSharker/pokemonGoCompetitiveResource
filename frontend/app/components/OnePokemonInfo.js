import React from 'react';
import { connect } from 'react-redux';
import { Image, Grid, Col, Row } from 'react-bootstrap';

const OnePokemonInfo = ({ thePokemon }) => (
  <Grid className="big-bottom-space wid big-top-space">
    <Row>
      <Col xs={12} md={4} className="col-center mid-f">
        <div> #{thePokemon.dex} {thePokemon.name} </div>
      </Col>
    </Row>

    <Row className="">
      <Col xs={12} md={4} className="col-center">
        <Image className="center-image" src={`/public/images/${thePokemon.dex}.png`} alt="logo" />
      </Col>

      <Col xs={12} md={8} className="col-bottom">
        <div className="lil-f"> Max CP: <span className="reg-c">{thePokemon.maxcp} </span></div>
        <div className="lil-f"> Attack: <span className="reg-c">{thePokemon.attack} </span></div>
        <div className="lil-f"> Defense: <span className="reg-c">{thePokemon.defense} </span></div>
        <div className="lil-f"> Stamina: <span className="reg-c">{thePokemon.stamina} </span></div>
        <div className="lil-f"> Type: <span className="reg-c">{thePokemon.types} </span></div>
        <div className="lil-f"> Description: <span className="reg-c">{thePokemon.description} </span></div>
      </Col>
    </Row>
  </Grid>
);

const mapStateToProps = ({ thePokemon }) => ({ thePokemon });

export default connect(mapStateToProps)(OnePokemonInfo);

// <div className="one-pok-top box">
//    <Image src={`/public/images/${thePokemon.dex}.png`} alt="logo" responsive />
//    <div>
//      <div> #{thePokemon.dex} {thePokemon.name} </div>
//      <div> Max CP: {thePokemon.maxcp} </div>
//      <div> Attack: {thePokemon.attack} </div>
//      <div> Defense: {thePokemon.defense} </div>
//      <div> Stamina: {thePokemon.stamina} </div>
//      <div> Type: {thePokemon.types} </div>
//      <div> Description: {thePokemon.description} </div>
//    </div>
//  </div>
// </div>
