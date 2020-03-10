import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { observer } from 'mobx-react';
import { observable, computed, configure, action } from 'mobx';

configure({ enforceActions: 'observed' });

const nickName = observable({
    name: 'Adam',
    age: 20,

    // computed values
    get nickName() {
        return `${this.name}${this.age}`;
    },

    increment() {this.age++},
    decrement() {this.age--},
}, {
    increment: action('Plus one'),
    decrement: action('Minus one'),
  }, {
    name: 'nickNameObservableObject'
  });

// const todos = observable([
//     { text: 'Learn React' },
//     { text: 'Learn MobX' },
// ])

// const nickName = new class UserNickName {
//     @observable name = 'Adam';
//     @observable age = 20;

//     // computed values
//     @computed get nickName() {
//         return `${this.name}${this.age}`;
//     }
// }

@observer class App extends Component {
    increment = () => this.props.store.increment();
    decrement = () => this.props.store.decrement();

    render() {
        return (
            <div>
                <h1>{this.props.store.age}</h1>
                <h4>{this.props.store.nickName}</h4>
                <button onClick={this.decrement}>-1</button>
                <button onClick={this.increment}>+1</button>
                {/* <ul>
                    {todos.map(({ text }) => <li key={text}>{text}</li>)}
                </ul> */}
            </div>
        );
    }
}

export default App;


ReactDOM.render(<App store={nickName} />, document.getElementById('root'));
serviceWorker.unregister();
