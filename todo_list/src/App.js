import React, { Component } from 'react';
import './App.css';
import ToDoList from './component/ToDoList';

class App extends Component {
  render() {
    return (
      <div>
        <ToDoList />
      </div>
    );
  }
}

export default App;
