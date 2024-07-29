import moment from 'moment/moment';
import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeAccessRights } from '../../store/hmiMode';
import NumPad from '../monitor/mainWindow/numPad/NumPad';
import NumPadPopup from '../monitor/mainWindow/numPadPopup/NumPadPopup';
const Header = () => {

  const cowInfo = useSelector(state => state.cow.cowInfo)
  const currentMode = useSelector(state => state.mode.main)
  const [openPopup, setOpenPopup] = useState(false)
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef();
  const dispatch = useDispatch()
  const milkingInfo = useSelector(state => state.milking.milkingList)
  const lastSuccessMilking = useSelector(state => state.milking.lastSuccessMilking)

  const handleOpen = (value, e) => {
    setOpenPopup(value);
  }

  useEffect(() => {
    setSeconds(0); // сброс таймера
    timerRef.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000); // запуск нового таймера
    // очистка useEffect при выполнении unmount компонента или перезапуске таймера
    return () => {
      clearInterval(timerRef.current);
    };
  }, [currentMode]);

  let time = moment.utc(seconds * 1000).format('m:ss');

  const handleClose = () => {
    setOpenPopup(false);
  };

  const handleChange = (value, currentSett) => {
    const current_date = +moment().format('DDMM');
    if (value == current_date) {
      dispatch(changeAccessRights(1))
    } else {
      dispatch(changeAccessRights(0))
    }
  }
  //Список режимов работы Робота
  const mods = {
    0: "",
    1: 'wait-icon',
    2: 'inputID-icon',
    3: "clean-icon",
    4: "clean-icon",
    5: "clean-icon",
    6: "clean-icon",
    7: "exit-icon",
    8: "yeld-icon",
    9: "status-cow-close-icon",
    10: "alarm-button",
  };

  return (
    <>
      <header className='header'>
        <div className='header-conteiner'>
          <div className='header-information'>
            <div className='system-condition-control'>
              <div className={`header-icon system-condition ${mods[currentMode]}`}>
              </div>
            </div>
            <div className='cow-amount' style={{ opacity: (currentMode == "8" || currentMode == "7" || currentMode == "9" ? 1 : 0) }}>
              <div className='header-icon cow-count'>
              </div>
              <p className='cow-count-value' style={{ width: "84px" }}>{cowInfo.id}</p>
            </div>
            <div className='milk-control' style={{ opacity: (currentMode == "8" || currentMode == "7" || currentMode == "9" ? 1 : 0) }}>
              <div className='header-icon milk-amount'>
              </div>
              {/* <p className='milk-indication' style={{ display: (currentMode == "8" ? "" : "none") }}>{((milkingInfo.length - 1) > 0) && milkingInfo[milkingInfo.length - 1].milk && ((milkingInfo[milkingInfo.length - 1].milk).toFixed(1) > 0) ? ((((milkingInfo[milkingInfo.length - 1].milk).toFixed(1) / 30)).toFixed(1)).replace(".", ",") : "10,1"}/{("12,2")} кг</p> */}
              <p className='milk-indication' style={{ display: (currentMode == "8" ? "" : "none") }}>{((milkingInfo.length - 1) > 0) && milkingInfo[milkingInfo.length - 1].milk && ((milkingInfo[milkingInfo.length - 1].milk).toFixed(1) > 0) ? ((((milkingInfo[milkingInfo.length - 1].milk).toFixed(1) / 30)).toFixed(1)).replace(".", ",") : (cowInfo.milkAvail ? (`${(cowInfo.milkAvail).toFixed(0).replace(".", ",")}%`) : `0%`)}/{(cowInfo.expmilk ? ((cowInfo.expmilk).toFixed(1)).replace(".", ",") : "0,0")} кг</p>
              <p className='milk-indication' style={{ display: (currentMode == "7" ? "" : "none") }}>{cowInfo.milkAvail >= 100 ? ((((lastSuccessMilking.milkAmount).toFixed(1) / 30)).toFixed(1)).replace(".", ",") : `${cowInfo.milkAvail}%`}/{(cowInfo.expmilk ? ((cowInfo.expmilk).toFixed(1)).replace(".", ",") : "0,0")}кг</p>
              <p className='milk-indication' style={{ display: (currentMode == "9" ? "" : "none") }}>{cowInfo.milkAvail >= 100 ? ((((lastSuccessMilking.milkAmount).toFixed(1) / 30)).toFixed(1)).replace(".", ",") : `${cowInfo.milkAvail}%`}/{(cowInfo.expmilk ? ((cowInfo.expmilk).toFixed(1)).replace(".", ",") : "0,0")}кг</p>
            </div>
            <div className='timer'>
              <div className='timer-icon'>
              </div>
              <p className='timer-count'>{time}</p>
            </div>
          </div>
          <div className='logo-container'>
            <div className='logo-icon' onClick={(e) => handleOpen(true, e)}>
            </div>
          </div>
        </div>
      </header>
      <NumPadPopup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        onClose={handleClose}
      >
        <NumPad
          handleClose={handleClose}
          handleChange={handleChange}
        ></NumPad>
      </NumPadPopup>
    </>
  );
}

export default Header;
