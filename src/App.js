import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.input.focus();
  }

  render() {
    return (
      <div className="container">
        <div className="row flex-row">

          <div className="col-md-12">
            <div className="panel panel-default flex-col">
              <div className="panel-heading">Experiment 1 - A Text Editor with a built-in assistant</div>
              <div className="panel-body flex-grow">
                <textarea
                  ref={(input) => { this.input = input; }}
                  placeholder="Type something..."
                />
              </div>
              <div className="panel-footer">sivahq.com</div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;