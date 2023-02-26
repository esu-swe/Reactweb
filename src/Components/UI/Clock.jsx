import React ,{ useState,useEffect}from 'react';

import '../../styles/Clock.css';

const Clock = () => {
  const  [days, setDays] = useState();
  const  [houre, setHoure] = useState();
  const  [minutes, setMinutes] = useState();
  const  [seconds, setSeconds] = useState();

  let interval;

  const countDown = () =>{
    const destnation = new Date('Feb 4, 2023').getTime();
    interval = setInterval(()=>{
      const now = new Date().getTime()
      const different = destnation - now
      const days = Math.floor(different / (1000 * 60 * 60 *24));

      const houre = Math.floor(different % (1000 * 60 * 60 * 24)/(1000 * 60 * 60));
      const minutes = Math.floor(different % (1000 * 60 * 60 )/(1000 * 60 ));
      const seconds = Math.floor(different % (1000 * 60 )/(1000 ));

      if(destnation < 0 ) clearInterval(interval.current);
      else{
        setDays(days);
        setHoure(houre);
        setMinutes(minutes);
        setSeconds(seconds);
      }
       

    });
  };

  useEffect(()=>{
    countDown();
  });

  return (
    <div className="clock_wrapper d-flex align-items-center gap-3">
      
      <div className="clock_data d-flex align-items-center gap-3">
        <div className='text-center'> 
          <h1 className='text-white fs-3 mb-2'>{days}</h1>
          <h5 className='text-white fs-6'>days</h5>
        </div>
        <span className='text-white fs-3'>:</span>
      </div>    <div className="clock_data d-flex align-items-center gap-3">
        <div className='text-center'>
          <h1 className='text-white fs-3 mb-2'>{houre}</h1>
          <h5 className='text-white fs-6 '>Houre</h5>
        </div>
        <span className='text-white fs-3 mb-'>:</span>
      </div>    <div className="clock_data d-flex align-items-center gap-3">
        <div className='text-center'>
          <h1 className='text-white fs-3 mb-2' >{minutes}</h1>
          <h5 className='text-white fs-6'>minetss</h5>
        </div>
        <span className='text-white fs-3'>:</span>
      </div>
      <div className="clock_data d-flex align-items-center gap-5">
        <div className='text-center'>
          <h1 className='text-white fs-3 mb-2'>{seconds}</h1>
          <h5 className='text-white fs-6'>seconds</h5>
        </div>
        <span className='text-white fs-3'></span>
      </div>
    </div>
  );
};

export default Clock;