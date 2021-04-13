import React, { Component } from 'react';
import './App.css';
import FormContainer from './FormContainer'
import NameList from './components/NameList';

const apigw = 'https://gpaxew3tdjwmudc5xi5dgifiei.apigateway.us-ashburn-1.oci.customer-oci.com' // Change me

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [{"fld_id": 1, "fld_str":""}]
    };
    this.addNewSubmission = this.addNewSubmission.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  addNewSubmission(formPayload) {
    fetch(`${apigw}/v1/name`, {
      method: 'POST',
      body: JSON.stringify(formPayload)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        let error = new Error('submission error')
        throw (error)
      }
    })
    .then(json => {
      let newNamesArray = this.state.names.concat(json)
      this.setState({ names: newNamesArray })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  componentDidMount() {
    fetch(`${apigw}/v1/names`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({ names: body });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  deleteItem(formPayload) {
    fetch(`${apigw}/v1/name`, {
      method: 'DELETE',
      body: JSON.stringify(formPayload)
    })
    .then(response => {
      if (response.ok) {
        return response.text();
      } else {
        let error = new Error('submission error')
        throw (error)
      }
    })
    .then(text => {
      let newNamesArray = this.state.names.filter((item) => {
        return item.fld_id !== formPayload.fld_id
      })
      this.setState({ names: newNamesArray })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  render(){
    let passDownDelete = (value) => { this.deleteItem(value) }
    return (
      <div className="App">
        <header className="App-header">
          <NameList
            names={this.state.names}
            deleteItem={passDownDelete}
          />
          <FormContainer addNewSubmission={this.addNewSubmission}/>
        </header>
      </div>
    );
  }
};

export default App;
