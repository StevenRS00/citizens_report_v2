import React from 'react';
import logo from './logo.svg';
import "../css/App.css"
import TopWelcome from './TopWelcome'
import {MiddleWelcome} from './MiddleWelcome'
import BottomWelcome from './BottomWelcome'
import FadeInAnimation from "../FadeIn";

function App() {
  return (
    <div style={{backgroundColor: "black"}}>
      <FadeInAnimation wrapperElement="div" direction="down" delay={0.4}>
          <TopWelcome/>
      </FadeInAnimation>

      <FadeInAnimation wrapperElement="div" direction="up" delay={0.5}>
        <MiddleWelcome />
      </FadeInAnimation>
      
      <FadeInAnimation wrapperElement="div" direction="up" delay={0.2}>
        <BottomWelcome />
      </FadeInAnimation>
    </div>
  );
}

export default App;
