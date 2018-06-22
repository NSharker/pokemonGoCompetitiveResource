import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { sendComment } from '../actions';

class CommentWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  onSubmit(values) {
    this.setState({ isLoading: true });
    const finalValues = {};
    finalValues.dex = this.props.thePokemon.dex;
    finalValues.pokemon_id = this.props.thePokemon.id;
    finalValues.content = values.content;
    finalValues.author = !values.author ? 'Anonymous' : values.author;
    this.props.sendComment(finalValues, () => {
      this.props.reset();
      this.setState({ isLoading: false });
    });
  }

  renderInput(field) {
    return (
      <div>
        <FormControl {...field.input} type="text" placeholder="Enter Name (or stay Anonymous)" />
      </div>
    );
  }

  renderArea(field) {
    return (
      <div>
        <FormControl {...field.input} componentClass="textarea" type="textarea" placeholder="Write something" />
        {field.meta.touched && field.meta.error &&
        <HelpBlock bsStyle="danger">{field.meta.error}</HelpBlock>}
      </div>
    );
  }

  render() {
    const { isLoading } = this.state;
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <FormGroup controlId="formControlsInput">
          <ControlLabel>Your Name</ControlLabel>
          <div>
            <Field
              name="author"
              component={this.renderInput}
            />
          </div>
        </FormGroup>

        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Comment</ControlLabel>
          <div>
            <Field
              name="content"
              className="other-bg"
              component={this.renderArea}
            />
          </div>
        </FormGroup>

        <div>
          <Button bsStyle="primary" bsSize="large" type="submit" disabled={isLoading}>
            {isLoading ? 'Posting your comment...' : 'Submit'}
          </Button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ thePokemon }) => ({ thePokemon });

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
})(connect(mapStateToProps, { sendComment })(CommentWindow));
