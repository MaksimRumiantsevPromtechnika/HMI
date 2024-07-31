import { red } from '@mui/material/colors';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearBucket } from '../../../../store/bucketReducer';
const MilkPathControl = () => {

  const [backetValue, setBacketValue] = useState(5)
  const pathList = []
  const [selectedBucket, setSelectedBucket] = useState(3)
  const dispatch = useDispatch()
  const swapBucket = (e) => {
    setSelectedBucket(e.target.id);
  };

  const bucketsInfo = useSelector(state => state.buckets.buckets)

  const warningColor = {
    "Мастит": "red",
    "Молозиво": "orange",
    "Антибиотик": "green"
  }

  for (let i = 0; i < backetValue; i++) {
    pathList.push(<div style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
      <button onClick={(e) => swapBucket(e)} style={{ backgroundColor: (i + 1) == selectedBucket ? 'rgba(42, 86, 154, 0.66)' : "white" }} className="button path-list-button" id={i + 1} key={i + 1}>{i + 1}</button>
      <div style={{ fontSize: "25px", height: "31px", display: "flex", justifyContent: 'center', marginTop: "52px", backgroundColor: warningColor[bucketsInfo[i].status] }}>{bucketsInfo[i].status}</div>
      <div className='milk-path-setting-item-id' style={{ marginTop: "33px" }}>
        <div className='milk-path-setiing-id'>
          <div className='milk-path-value'>{bucketsInfo[i].id}</div>
          <div className='milk-path-value'>{bucketsInfo[i].id}</div>
        </div>
        <div className='milk-path-setiing-id'>
          <div className='milk-path-value'>{bucketsInfo[i].id}</div>
          <div className='milk-path-value'>{bucketsInfo[i].id}</div>
        </div>
      </div>
      <div className='milk-path-setting-item' style={{ marginTop: "39px" }}>
        <div className='milk-path-value'>{bucketsInfo[i].val}</div>
      </div>
      <div className='milk-path-setting-item'>

        <div className='milk-path-value' style={{ marginTop: "52px" }}>{bucketsInfo[i].dateTime}</div>
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
        <button className="button milk-path-drain-button" onClick={() => dispatch(clearBucket(selectedBucket))}></button>
      </div>
      <div style={{ height: "100%", display: "flex", justifyContent: "center", gap: "25px", marginLeft: '30px' }} className="BacketsList">
        {pathList}
      </div>
    </div>
  );
}

export default MilkPathControl;