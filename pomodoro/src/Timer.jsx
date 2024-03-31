import { CircularProgressbar, buildStyles, } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React from 'react'
import PlayBnt from './PlayBnt'
import PauseBtn from './PauseBtn';
import SettingsBtn from './SettingsBtn';
import { useContext, useState, useEffect, useRef, useCallback } from 'react';
import SettingsContext from './SettingsContext';



const red = '#f54e4e';
const green = '#4aec8c';

function Timer() {

  const settingInfo = useContext(SettingsContext);
  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState('work'); // work/break/null
  const [secondLeft, setSecondLeft] = useState(0);
  const secondLeftRef = useRef(secondLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  // use useEffect to update the ref variables when state changes
  useEffect(() => {
    secondLeftRef.current = secondLeft;
  }, [secondLeft]);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  const tick = useCallback(() => {
    secondLeftRef.current = secondLeftRef.current - 1;
    setSecondLeft(secondLeftRef.current);
  },[]);

  const switchMode = useCallback(() => {
    const nextMode = modeRef.current === 'work' ? 'break' : 'work';
    const nextSecond = (nextMode === 'work' ? settingInfo.workMinutes : settingInfo.breakMinutes) * 60;
    setMode(nextMode);
    setSecondLeft(nextSecond);
  },[settingInfo.breakMinutes, settingInfo.workMinutes]);

  const initTimer = useCallback(() => {
    const workMinutes = settingInfo.workMinutes * 60;
    setSecondLeft(workMinutes);
  },[settingInfo.workMinutes]);

  useEffect(() => {
    initTimer();
    const interval = setInterval(() => {
      if(isPausedRef.current){
        return;
      }
      if(secondLeftRef.current <= 0){
        return switchMode();
      }
      tick(); // Call the tick function to decrease the seconds
    }, 1000);

    return () => clearInterval(interval);
  }, [initTimer, switchMode, tick]);




const totalSecond = mode === 'work' 
? settingInfo.workMinutes * 60 
: settingInfo.breakMinutes * 60;
const percentage = Math.round(secondLeft / totalSecond * 100) 

const minute = Math.floor(secondLeft / 60);
let seconds = secondLeft % 60;

if (seconds < 10) seconds = '0' + seconds;


  return (
    
    <div>
         <CircularProgressbar 
        value={percentage} 
        text={minute + ':' + seconds}
        styles={buildStyles({
          rotation: 0.75, 
          strokeLinecap: 'round', 
          textColor:'#fff', 
          pathColor: mode === 'work' ? red : green , 
          trailColor:'rgba(255, 255, 255, .2)'
        })} 
      />
      <div style={{marginTop:'20px'}}>
        {isPaused ?  <PlayBnt  onClick={() => setIsPaused(false)}  /> 
        : <PauseBtn  onClick={() => setIsPaused(true)} />}
      
      </div>
      <div style={{marginTop:'20px'}}>
          <SettingsBtn onClick={()=> settingInfo.setShowSettings(true)} />
      </div>
    </div>
  )
}

export default Timer
