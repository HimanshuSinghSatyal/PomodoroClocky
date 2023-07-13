import React, { FC, useState, useEffect } from 'react';

const App : FC = () => {
  const [isWorking, setIsWorking] = useState(true);
  const [cyclesCompleted, setCyclesCompleted] = useState(0);
  const [cycleLimit, setCycleLimit] = useState(2);
  const [breakTime, setBreakTime] = useState(5 * 60);
  const [timeRemaining, setTimeRemaining] = useState(25 * 60);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    if (timeRemaining === 0) {
      clearInterval(interval);

if (isWorking) {
        if (cyclesCompleted + 1 === cycleLimit ) {
          setIsWorking(false);
          setCyclesCompleted((prevCycles) => prevCycles + 1);         setTimeRemaining(breakTime);
      }
        else if (cyclesCompleted + 1 < cycleLimit) {
        setIsWorking(false);      setCyclesCompleted((prevCycles) => prevCycles + 1);
          setTimeRemaining(breakTime);    }
      } else {
        setIsWorking(true);
        setTimeRemaining(25 * 60);
      }
  }
    return () => clearInterval(interval);
    
  }, [timeRemaining, isWorking, breakTime, cycleLimit, cyclesCompleted]);
  
  
const timeFormat = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return(
      `${minutes}:${seconds}`
)};


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-300">
      <h1 className="text-3xl font-bold mb-4">{isWorking ?  'Work Time': 'Break Time' }</h1>
      <div className="text-6xl font-bold mb-4 text-rose-400">{timeFormat(timeRemaining)}</div>
      <div className="text-2xl mb-4 ">
        Completed cycles: {cyclesCompleted}/{cycleLimit}
      </div>
    </div>
  );
};

export default App;




