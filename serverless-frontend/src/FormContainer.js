import React, { Component } from 'react';
import FormItem from './components/FormItem'

class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submission: ''
    }
    this.changeSubmission = this.changeSubmission.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  changeSubmission(value) {
    this.setState({ submission: value })
  }

  handleSubmit(event) {
    event.preventDefault()
    let id = Math.floor((Math.random() * 10000000) + 1)
    let formPayload = {
      fld_str: this.state.submission,
      fld_id: id
    }
    this.props.addNewSubmission(formPayload)
    this.setState({submission: ''})
  }

  render() {
    let passDownSubmission = (value) => { this.changeSubmission(value) }
    return(
      <form onSubmit={this.handleSubmit}>
        <FormItem
          content={this.state.submission}
          label='Submission'
          name='submission'
          changeSubmission={passDownSubmission}
        />
        <input className="button" type="submit" value="submit" />
      </form>
    )
  }
}

export default FormContainer;
