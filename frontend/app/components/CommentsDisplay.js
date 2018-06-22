import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class CommentsDisplay extends Component {
  renderHelper() {
    return _.map(this.props.comments, (com, i) => {
      let className = '';
      if (com.sentiment === '+') {
        className = 'positive';
      } else if (com.sentiment === '-') {
        className = 'negative';
      } else if (com.sentiment === '~') {
        className = 'neutral';
      }
      return (
        <ListGroupItem header={com.content} key={i} className={`bottom-space ${className}`}>
           by {com.author}
        </ListGroupItem>
      );
    });
  }

  render() {
    return (
      <div className="wid">
        <ListGroup>
          {this.renderHelper()}
        </ListGroup>
      </div>
    );
  }
}

const mapStateToProps = ({ comments }) => ({ comments });

export default connect(mapStateToProps)(CommentsDisplay);
