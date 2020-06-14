import React from 'react';
import Progress from './components/Progress';
import './App.css';

const App = () => (
  <>
    <h1>React Progress Bar</h1>
    <Progress done="70" />
    <Progress done="50" />
    <Progress done="30" />
    <Progress done="100" />
  </>
)


export default App;
