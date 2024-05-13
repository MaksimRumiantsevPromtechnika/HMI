import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
const MilkPathControl = () => {

  const [backetValue, setBacketValue] = useState(5)
  const pathList = []
  const [selectedBucket, setSelectedBucket] = useState(3)

  const swapBucket = (e) => {
    setSelectedBucket(e.target.id);
    console.log(selectedBucket);
  };

  const bucketsInfo = useSelector(state => state.buckets.buckets)


  for (let i = 0; i < backetValue; i++) {
    pathList.push(<div style={{ display: "flex", flexDirection: "column", gap: "52px", alignItems: "center", }}>
      <button onClick={(e) => swapBucket(e)} style={{ backgroundColor: (i + 1) == selectedBucket ? "#25be2c" : "white" }} className="button path-list-button" id={i + 1} key={i + 1}>{i + 1}</button><div style={{ fontSize: "25px", height: "31px", display: "flex", justifyContent: 'center' }}>{bucketsInfo[i].status}</div>
      <div className='milk-path-setting-item'>
        <div className='milk-path-value'>{bucketsInfo[i].id}</div>
      </div>
      <div className='milk-path-setting-item'>
        <div className='milk-path-value'>{bucketsInfo[i].val}</div>
      </div>
      <div className='milk-path-setting-item'>

        <div className='milk-path-value'>{bucketsInfo[i].dateTime}</div>
      </div>
    </div>
    )
  }

  return (
    <div style={{ display: "flex", height: "100%", justifyContent: "start", marginLeft: "25px", marginTop: "20px" }}>
      <div className='milk-left-bar' style={{ flexDirection: "column", display: "flex", height: "100%", justifyContent: "start", gap: "28px", marginTop: "110px", alignItems: 'center' }}>
        <div className='milk-path-icon milk-path-attention-icon'></div>
        <div className='milk-path-icon milk-path-cow-icon'></div>
        <div className='milk-path-icon milk-path-milk-amount-icon'></div>
        <div className='milk-path-icon milk-path-timer-icon'></div>
        <button className="button milk-path-drain-button"></button>
      </div>
      <div style={{ height: "100%", display: "flex", justifyContent: "center", gap: "50px", marginLeft: '30px' }} className="BacketsList">
        {pathList}
      </div>
    </div>
  );
}

export default MilkPathControl;