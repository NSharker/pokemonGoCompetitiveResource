import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { sendComment } from '../actions';

class CommentWindow extends Component {
  onSubmit(values) {
    console.log('VALUES', values);
    // add anonymous name if necessary
    const finalValues = {};
    finalValues.content = values.content;
    finalValues.author = !values.author ? 'Anonymous' : values.author;
    this.props.sendComment(finalValues, () => this.props.reset());
  }

  renderArea(field) {
    return (
      <div>
        <input {...field.input} type="textarea" />
        {field.meta.touched && field.meta.error &&
        <span className="other-bg">{field.meta.error}</span>}
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div>
          <label>Your Name</label>
          <div>
            <Field
              name="author"
              component="input"
              placeholder="Enter Name (or stay Anonymous)"
            />
          </div>
        </div>

        <div>
          <label>Comment</label>
          <div>
            <Field
              name="content"
              className="other-bg"
              component={this.renderArea}
              placeholder="Write something"
            />
          </div>
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
