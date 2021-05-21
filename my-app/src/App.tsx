import React from 'react';
import './css/App.css';
import TopWelcome from './TopWelcome'
import {MiddleWelcome} from './MiddleWelcome'
import BottomWelcome from './BottomWelcome'
import FadeInAnimation from "./FadeIn";

function App() {
  return (
    <div style={{backgroundColor: "black"}}>
      <FadeInAnimation wrapperElement="div" direction="down">
          <TopWelcome/>
      </FadeInAnimation>

      <FadeInAnimation wrapperElement="div" direction="up">
        <MiddleWelcome />
      </FadeInAnimation>
      
      <FadeInAnimation wrapperElement="div" direction="up">
        <BottomWelcome />
      </FadeInAnimation>
    </div>
  );
}

export default App;
