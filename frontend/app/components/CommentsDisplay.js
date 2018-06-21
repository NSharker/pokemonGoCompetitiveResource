import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

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
      return <li key={i} className={className}>{com.content} author:{com.author}</li>;
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderHelper()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ comments }) => ({ comments });

export default connect(mapStateToProps)(CommentsDisplay);
