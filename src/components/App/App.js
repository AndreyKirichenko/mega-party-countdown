import React, { useEffect, useState, useRef } from 'react';

import { getRandomColor } from '../../utils/common';
import Billet from '../Billet/Billet';
import { calculateCountdown } from '../Countdown/Countdown';

import './App.css';

const DATE = '2020-12-30T13:05:00';
// const DATE = '2020-12-14T01:52:00';

const DAYS = 16;

const MAX_TIME = 5000;
const MIN_TIME = 1000;

const MAX_BLUR = 10;

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState(getRandomColor());
  
  const intervalRef = useRef();

  const style = {
    backgroundColor,
  }

  const calculatedCountdown = calculateCountdown(DATE);

  const progressLeft = (calculatedCountdown.days + 1) / DAYS || 0;

  const timeout = MIN_TIME + (MAX_TIME - MIN_TIME) * progressLeft;

  document.documentElement.style.setProperty('--app-color-timeout', timeout + "ms");
  document.documentElement.style.setProperty('--billet-text-shadow-timeout', timeout + "ms");


  console.log('calculatedCountdown', calculatedCountdown);

  useEffect(
    () => {
      intervalRef.current = setInterval(() => {
        setBackgroundColor(getRandomColor())
        document.documentElement.style.setProperty('--app-map-blur', Math.random() * MAX_BLUR + "px");
      }, timeout)

      return () => clearInterval(intervalRef.current);
    },
    []
  );

  return (
    <div className="app"> 
      <div className="app__color" style={style} />
      <div className="app__content">
        <Billet date={DATE} progressLeft={progressLeft} />
      </div>

    </div>
  );
}

export default App;
