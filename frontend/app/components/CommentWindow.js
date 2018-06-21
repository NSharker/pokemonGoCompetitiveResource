import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { sendComment } from '../actions';

class CommentWindow extends Component {
  onSubmit(values) {
    console.log('VALUES', values);
    // const { resetForm } = this.props;
    this.props.sendComment(values, () => this.props.reset());
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div>
          <Field
            name="author"
            component="input"
          />
        </div>

        <div>
          <Field
            name="content"
            component="textarea"
          />
        </div>

        <div>
          <button type="submit" >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

const validateInput = (values) => {
  const errors = {};
  if (!values.content) {
    errors.content = 'Enter text!';
  }
  return errors;
};

// PokemonCommentForm is a unique identifier so that redux form know it by the name
export default reduxForm({
  validate: validateInput,
  form: 'PokemonCommentForm',
})(connect(null, { sendComment })(CommentWindow));
