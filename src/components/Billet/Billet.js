import React, { useEffect, useState, useRef } from 'react';

import { getTextShadow } from '../../utils/common';
import Countdown from '../Countdown/Countdown';

import './Billet.css';

const MAX_TIME = 1000;
const MIN_TIME = 500;

const Billet = ({ date, progressLeft }) => {
  const [textShadow, setTextShadow] = useState(getTextShadow());

  const intervalRef = useRef();

  const style = {
    textShadow,
  }

  const timeout = MIN_TIME + (MAX_TIME - MIN_TIME) * progressLeft;

  document.documentElement.style.setProperty('--billet-pulse-timeout', timeout + "ms");

  useEffect(
    () => {
      intervalRef.current = setInterval(() => {
        setTextShadow(getTextShadow());
      }, timeout)

      return () => clearInterval(intervalRef.current);
    },
    []
  );

  let classNames = 'billet';

  console.log('progressLeft', progressLeft);
  if (!progressLeft) classNames = 'billet billet--dancing';

  return (
    <div className={classNames} style={style}>
      <span className="billet__title">до мега тусы осталось</span>
      <div className="billet__countdown">
        <Countdown date={date} />
      </div>
    </div>
  );
}

export default Billet