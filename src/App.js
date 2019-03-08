import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import Chat from './components/Chat'

let Contanier = props => <div className={`Contanier ${props.className}`}>{props.children}</div>
let Forms = props => <Contanier className='form'>{props.children}</Contanier>

class App extends Component {
  render() {
    return (
      <Contanier className="App">
        <Form />
        <Chat />
      </Contanier>
    );
  }
}

export default App;
