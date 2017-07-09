import React, { Component } from 'react';
import './App.css';
import ContentEditable from './ContentEditable.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
    this.handleChange = this.handleChange.bind(this);
  }

  getInitialState() {
    return { html: "this is <em>an</em> <strong>example</strong>" };
  }

  componentDidMount() {
  }

  handleChange(event) {
    this.setState({ html: event.target.value });
  }

  render() {
    return (
      <div className="container">
        <div className="row flex-row">

          <div className="col-md-12">
            <div className="panel panel-default flex-col">
              <div className="panel-heading">Experiment 3 - Rich Text Editor with a Comment Bot</div>
              <div className="panel-body flex-grow">
                <ContentEditable html={this.state.html} onChange={this.handleChange} />
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