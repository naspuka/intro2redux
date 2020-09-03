import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement } from './actions';

function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello</h1>
        <h2>Counter {counter}</h2>
        <button onClick= {() => dispatch(increment(10))}>+</button>
        <button onClick= {() => dispatch(decrement())}>-</button>
        {isLogged ? <h3>Valuable information you shouldn't see</h3> : ''}
       
    </div>
  );
}

export default App;
