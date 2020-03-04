import React, { Component, Fragment } from 'react';
import Title from '../components/title/title';
import Todo from '../containers/todo/todo';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Title title="ToDo App"/>
        <Todo />
      </Fragment>
    )
  }
}

export default App;
