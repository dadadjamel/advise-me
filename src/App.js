import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

class App extends Component {
  state = { advise: '' }

  componentDidMount() {
    this.get_advise()
  }

  
  get_advise = () => {
    Axios.get("https://api.adviceslip.com/advice")
      .then(response => {
        console.log(response)
        this.setState({ advise: response.data.slip.advice });
        console.log(this.state.advise)

      }).catch(error => {
        console.log(error)

      })
  }


  render() {
    return (
      <div className="app">
        <div className="card" onClick={this.get_advise}>
          <h1>{this.state.advise}</h1>
          {/* <button onClick={this.get_advise}>
            <span>Advice Me</span>
          </button> */}
        </div>

      </div>
    );
  }
}

export default App;
