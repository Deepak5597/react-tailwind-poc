import React, { Component } from 'react';
import { render } from 'react-dom';
import Screen from './Screen';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div class="h-screen w-screen">
        <Screen />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
