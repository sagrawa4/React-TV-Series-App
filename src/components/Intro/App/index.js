import React, { Component } from 'react';
import './App.css';
import Intro from '..';
import Series from '../../../containers/Series'
import 'whatwg-fetch';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro message="Here you can find all of your most loves series"/>
        
        <Series />
      </div>
    );
  }
  
}

export default App;
