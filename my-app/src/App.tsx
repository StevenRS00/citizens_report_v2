import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopWelcome from './TopWelcome'
import {MiddleWelcome} from './MiddleWelcome'
import BottomWelcome from './BottomWelcome'

function App() {
  return (
    <>
      <TopWelcome />
      <MiddleWelcome />
      <BottomWelcome />
    </>
  );
}

export default App;
