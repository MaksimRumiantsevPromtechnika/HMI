import { fontFamily } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function CounterInput({ initialVal, onChange, index, label, dimension, step }) {
  const [value, setValue] = useState(initialVal);

  useEffect(() => {
    onChange(value);
  }, [value]);

  const increase = () => {
    setValue(oldValue => Number((oldValue + step).toFixed(1)));
  };

  const decrease = () => {
    setValue(oldValue => Number((oldValue - step).toFixed(1)));
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
      <p style={{ width: '200px' }}>{`${label}`}</p>
      <div>
        <button style={{ width: '43px', marginLeft: '0px', marginRight: '0px', fontSize: '20px' }} className='configuration-item-button' onClick={decrease}>-</button>
        <input style={{ marginLeft: '5px', marginRight: '5px', fontSize: '20px' }} className='configuration-item-button' value={`${value}${dimension}`} readOnly />
        <button style={{ width: '43px', marginLeft: '0px', marginRight: '0px', fontSize: '20px' }} className='configuration-item-button' onClick={increase}>+</button>
      </div>
    </div>
  );
};

export default CounterInput;