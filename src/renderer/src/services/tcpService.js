
import moment from 'moment/dist/moment';
import 'moment/dist/locale/ru';
import Moment from 'moment';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDisconnectAlarm, addHistoryAlarm, addNewAlarm, addNewHistory, deletaAlarm } from '../store/alarm';
import { changeCameraConnectionAction, changeConnectionAction } from '../store/connectionReducer';
import { updateTeatValueAction } from '../store/cupsInfoReducer';
import { changeConnectionStatusAction, changeMainAction, changeModeAction, toggleSeparate, toggleSpeed, toggleTeatCalibration } from '../store/hmiMode';
import { updateShemeValueAction } from '../store/schemeInfoReducer';
import { updateVacValueAction } from '../store/vacCalibration';
import { changeWashHistory, changeWashInfo, changeWashStage } from '../store/washInfo';
import { addNewDot, addSuccessMilking, clearData } from '../store/milkingReducer';
import { addHistoryWash, addNewWash } from '../store/clean';
import { updateCowValueAction } from '../store/cowInfoReducer';
import { addMilkingHistory, addNewMilking } from '../store/milkingHistoryReducer';
import { changeSettings, updateSettings } from '../store/mainSettingsReduser';
import { changeCameraMap } from '../store/cameraReducer';
const split2 = require('split2');

const net = require('net');
const useTcpConnection = () => {
  const currentMode = useSelector(state => state.mode.main);
  const [currentModeVal, setCurrentModeVal] = useState(false)
  useEffect(() => {
    setCurrentModeVal(currentMode)
  }, [currentMode]);
  const [isConnected, setIsConnected] = useState(false)
  const dispatch = useDispatch()
  const connection = useSelector(state => state.connection.connection)
  const cameraConnection = useSelector(state => state.connection.cameraConnection)
  const alarmVocabulary = useSelector(state => state.alarm.alarmVocabulary)
  const washVocabulary = useSelector(state => state.washHistory.washVocabulary)
  const milkVocabulary = useSelector(state => state.milkingHistory.milkingVocabulary)
  const client = new net.Socket();
  const client2 = new net.Socket();
  let transformDict = {
    "vak1": { "false": 1, "true": 2 },
    "vak2": { "false": 3, "true": 4 },
    "vak3": { "false": 5, "true": 6 },
    "vak4": { "false": 7, "true": 8 },
};

  const connectionToTcpServer = async () => {
    client.connect(12000, '10.5.130.240', () => {
    })
  }

  const connectionToCamera = async () => {
    client2.connect(12001, '10.5.130.240', () => {
    })
  }
  let buffer = ""
  
  const checkMsg = async (data) => {
    if (data.toString().includes("all_state")) {
      const modifiedData = data.toString().replace(/[a-zA-Z()_]/g, '');
      const dataArray = modifiedData.split(";")
      const dataObj = {}
      for (let i = 0; i < dataArray.length; i += 2) {
        dataObj[`i${dataArray[i]}`] = parseFloat(dataArray[(i + 1)])
      }
      console.log(dataObj);
      dispatch(updateShemeValueAction(dataObj))
    } 

    else if (data.toString().includes("cur_state")) {
      const modifiedState = data.toString().replace(/[a-zA-Z()_]/g, '');
      
      dispatch(changeMainAction(modifiedState))
    } 

    else if (data.toString().includes("wash_info")) {
      const modifiedWashInfo = data.toString().replace(/[a-zA-Z()_]/g, '');
      
      const washArray = modifiedWashInfo.split(";")
      
      dispatch(changeWashInfo(washArray))
    }

    else if (data.toString().includes("washes_last")) {
      const modifiedWashHistory = data.toString().replace(/[a-zA-Z()_]/g, '');
      const washHistoryArray = modifiedWashHistory.split(";")
      const washHistoryObj = {}
      for (let i = 0; i < washHistoryArray.length; i += 2) {
        washHistoryObj[`i${washHistoryArray[i]}`] = (washHistoryArray[(i + 1)])
      }
      dispatch(changeWashHistory(washHistoryObj))
      console.log(washHistoryObj);
    }

    else if (data.toString().includes("wash_stage")) {
      const modifiedStage = parseFloat(data.toString().replace(/[a-zA-Z()_]/g, ''));
      console.log(modifiedStage);
      dispatch(changeWashStage(modifiedStage))
    }

    else if (data.toString().includes("msg")) {
      console.log(data.toString());
      const modifiedMsg = (data.toString().replace(/[a-zA-Z()_]/g, ''));
      console.log(modifiedMsg);
      const alarmInfoArray = modifiedMsg.split(";")

      let formattedDateTime = moment(alarmInfoArray[3], 'DD.MM.YYYY HH:mm:ss').locale('ru').format('DD MMMM HH:mm') // '15 января 10:00'
      console.log(alarmInfoArray);
      const alarmTypeCode = alarmInfoArray[1].toString()
      const alarmCode = alarmInfoArray[2].toString()
      const alarmInfoObj = {
        "Время возникновения ошибки": formattedDateTime,
        "Тип сигнализации": alarmVocabulary.alarmType[alarmTypeCode],
        "Номер": alarmInfoArray[2],
        "Описание ошибки": alarmVocabulary.alarmDescription[alarmCode]
      }
      console.log(alarmInfoObj);
      dispatch(addNewAlarm(alarmInfoObj))
    }

    else if (data.toString().includes("cow_parameters")) {
      const modifiedData = data.toString().replace(/[a-zA-Z()_]/g, '');
      const dataArray = modifiedData.split(";")
      const dataObj = {}
      for (let i = 0; i < dataArray.length; i += 2) {
        dataObj[`i${dataArray[i]}`] = parseFloat(dataArray[(i + 1)])
      }
      console.log(dataObj);
      dispatch(updateShemeValueAction(dataObj))
    }

    else if (data.toString().includes("vacinfo")) {
      console.log(data.toString());
      const modifiedVacData = data.toString().match(/(\b[ct]\d;-?\d{1,3}(;)?)+\b/g);
      const dataVac = modifiedVacData.join().replace(/;/g,',');
      const dataVacArray = dataVac.split(",")
      console.log(dataVacArray);
      const dataVacObj = {}
      for (let i = 0; i < dataVacArray.length; i += 2) {
        dataVacObj[dataVacArray[i]] = (dataVacArray[(i + 1)])
      }
      console.log(dataVacObj);
      dispatch(updateVacValueAction(dataVacObj))
    } 

    else if (data.toString().includes("cur_mode")) {
      const modifiedData = data.toString().replace(/[a-zA-Z()_]/g, '');
      console.log(modifiedData);
      dispatch(changeModeAction(modifiedData))
    }
    else {
      // console.log(data.toString());
    }
  }

  function onlyNumbers(str) {
    return /^\d+$/.test(str);
  }

  const checkMap = async (data) => {
    if (data.toString().includes("{") || onlyNumbers(data.toString()) || data.toString().includes("}")) {
      buffer += data
      let parsedData = ""
      console.log(buffer);
      try {
        parsedData = JSON.parse(buffer.toString())
      } catch (error) {
      
      }
      if (parsedData) {
        console.log(parsedData);
        buffer = "";
        await checkJSON(parsedData)
      }
    }
  }

  const checkType = async (data) => {
    if (data.toString().includes("{")) {
      buffer += data
      let parsedData = ""
      console.log(buffer);
      try {
        parsedData = JSON.parse(buffer.toString())
      } catch (error) {
      
      }
      if (parsedData) {
        console.log(parsedData);
        buffer = "";
        await checkJSON(parsedData)
        console.log(44);
      }
    } else {
      await checkMsg(data)
    }
  }

  const checkJSON = async (parsedData) => {
    if (parsedData.hasOwnProperty("eventMsg")) {      
      let origTime = parsedData.eventMsg.dateTime
      let convertedTime = moment(origTime, moment.ISO_8601).locale('ru').format('HH:mm D MMM')
      let convertedType = alarmVocabulary.alarmType[parsedData.eventMsg.msgType]
      console.log(parsedData);
      let newData = {
        ...parsedData.eventMsg,
        dateTime: convertedTime,
        // msgType: convertedType,
        msgDecription: `${parsedData.eventMsg.nameID} ${alarmVocabulary.alarmDescription[parsedData.eventMsg.nameID]}`
      }
      switch (parsedData.eventMsg.msgType) {
        case 4:
          dispatch(addNewHistory(newData))
          break;
        case 3:
          dispatch(addNewHistory(newData))
          break;
        default:
            console.log(parsedData.eventMsg.msgType);
            console.log(newData);
            dispatch(addNewHistory(newData))
            dispatch(addNewAlarm(newData))
      }
    } else if (parsedData.hasOwnProperty("eventMsgs")) {
      console.log(parsedData);
      let newDataList = {
        msg: parsedData.eventMsgs.map(item => {
          let origTime = item.dateTime
          let convertedTime = moment(origTime, moment.ISO_8601).locale('ru').format('HH:mm D MMM')
          let convertedType = alarmVocabulary.alarmType[item.msgType]
            return {
                ...item,
                dateTime: convertedTime,
                // msgType: convertedType,
                msgDecription: `${item.nameID} ${alarmVocabulary.alarmDescription[item.nameID]}`
            };
        })
    };
    console.log(newDataList.msg);
    const sortedData = newDataList.msg.sort((a, b) => new Date(moment(b.dateTime, "DD MMMM HH:mm").toISOString()) - new Date(moment(a.dateTime, "DD MMMM HH:mm").toISOString()));
    console.log(sortedData);
    dispatch(addHistoryAlarm(sortedData))
    } else if (parsedData.hasOwnProperty("cowParameters")) {
      let cowInfo = {
        ...parsedData.cowParameters
      }
      dispatch(updateCowValueAction(cowInfo))
    } 
    else if (parsedData.hasOwnProperty("cameraMap")) {
      dispatch(changeCameraMap(parsedData.cameraMap.map))
      console.log(parsedData.cameraMap.map);
    } 
    else if (parsedData.hasOwnProperty("milkStat")) {
      console.log(parsedData.milkStat.vak1);
      let convertVak1 = transformDict["vak1"][parsedData.milkStat.vak1]
      let convertVak2 = transformDict["vak2"][parsedData.milkStat.vak2]
      let convertVak3 = transformDict["vak3"][parsedData.milkStat.vak3]
      let convertVak4 = transformDict["vak4"][parsedData.milkStat.vak4]
      let newDot = {
        ...parsedData.milkStat,
        vak1: convertVak1,
        vak2: convertVak2,
        vak3: convertVak3,
        vak4: convertVak4,
      }
      console.log(newDot);
      dispatch(addNewDot(newDot))
      client.write(...parsedData.milkStat)
    } else if (parsedData.hasOwnProperty("washHistoryLast")) {      
      let origTime = parsedData.washHistoryLast.lastWash
      let convertedTime = moment(origTime, moment.ISO_8601).locale('ru').format('HH:mm D MMM')
      let convertedType = washVocabulary.washType[parsedData.washHistoryLast.washType]
      let newData = {
        dateTime: convertedTime,
        washType: convertedType,
        washDuration: parsedData.washHistoryLast.totalTime,
        washStatus: "Успешно",
      }
      console.log(newData);
      dispatch(addNewWash(newData))
    } else if (parsedData.hasOwnProperty("milkLast")) {      
      let origTime = parsedData.milkLast.dateTime
      let convertedTime = moment(origTime, moment.ISO_8601).locale('ru').format('HH:mm D MMM')
      let convertedResult = milkVocabulary.result[parsedData.milkLast.result]
      let convertedDestination = milkVocabulary.destination[parsedData.milkLast.destination]
      let convertedMilkAmount = parsedData.milkLast.actualMilk > 0 ? `${((parsedData.milkLast.actualMilk/30).toFixed(1)).replace(".", ",")}/${((parsedData.milkLast.expMilk).toFixed(1)).replace(".", ",")}` : `${(parsedData.milkLast.milkAvail).toFixed(0)}%`
      let originAmt = moment.duration(parsedData.milkLast.amt, "seconds");
      let convertedAmt = moment.utc(originAmt.asMilliseconds()).format('mm:ss');
      let newData = {
        ...parsedData.milkLast,
        dateTime: convertedTime,
        result: convertedResult,
        destination: convertedDestination,
        amt: convertedAmt,
        milkAmount: convertedMilkAmount,
      }
      console.log(newData);
      dispatch(addNewMilking(newData))
      dispatch(clearData());
      client.write("end")
      if (parsedData.milkLast.actualMilk > 0) {
        let lastMilk = {
          cowId: parsedData.milkLast.id,
          milkAmount: parsedData.milkLast.actualMilk,
          expMilk: parsedData.milkLast.expMilk
        }
        console.log(lastMilk);
        dispatch(addSuccessMilking(lastMilk))
      }
    } else if (parsedData.hasOwnProperty("milkingHistory")) {      
      let newDataList = {
        milking: parsedData.milkingHistory.map(item => {
          let origTime = item.dateTime
          let convertedTime = moment(origTime, moment.ISO_8601).locale('ru').format('HH:mm D MMM')
          let convertedResult = milkVocabulary.result[item.result]
          let convertedDestination = milkVocabulary.destination[item.destination]
          let convertedMilkAmount = item.milkAvail >= 100 ? `${((item.actualMilk/30).toFixed(1)).replace(".", ",")}/${((item.expMilk).toFixed(1)).replace(".", ",")}` : `${(item.milkAvail).toFixed(0)}%`
          let originAmt = moment.duration(item.amt, "seconds");
          let convertedAmt = moment.utc(originAmt.asMilliseconds()).format('mm:ss');   
          return {
            ...item,
            dateTime: convertedTime,
            result: convertedResult,
            destination: convertedDestination,
            amt: convertedAmt,
            milkAmount: convertedMilkAmount,
          }
        })
      }
      const sortedData = newDataList.milking.sort((a, b) => new Date(moment(b.dateTime, "DD MMMM HH:mm").toISOString()) - new Date(moment(a.dateTime, "DD MMMM HH:mm").toISOString()));
      dispatch(addMilkingHistory(sortedData))
    } else if (parsedData.hasOwnProperty("washHistory")) {
      console.log(parsedData);
      let newDataList = {
        wash: parsedData.washHistory.map(item => {
          let origTime = item.lastWash
          let convertedTime = moment(origTime, moment.ISO_8601).locale('ru').format('HH:mm D MMM')
          let convertedType = washVocabulary.washType[item.washType]
            return {
                dateTime: convertedTime,
                washType: convertedType,
                washDuration: item.totalTime,
                washStatus: "Успешно",
            };
        })
    };
    console.log(newDataList.wash);
    const sortedData = newDataList.wash.sort((a, b) => new Date(moment(b.dateTime, "DD MMMM HH:mm").toISOString()) - new Date(moment(a.dateTime, "DD MMMM HH:mm").toISOString()));
    console.log(sortedData);
    dispatch(addHistoryWash(sortedData))
    } else if (parsedData.hasOwnProperty("udrGlobalSettings")) {
      let newData = {
        ...parsedData.udrGlobalSettings
      }
      dispatch(updateSettings(newData))
    } else if (parsedData.hasOwnProperty("armSlowSpeed")) {
      dispatch(toggleSpeed(parsedData.armSlowSpeed))
    } else if (parsedData.hasOwnProperty("cowSeparate")) {
      dispatch(toggleSeparate(parsedData.cowSeparate))
      console.log(parsedData.cowSeparate);
    } else if (parsedData.hasOwnProperty("teatStatus")) {
      let newData = {
        ...parsedData.teatStatus
      }
      console.log("TeatStatus");
      dispatch(updateTeatValueAction(newData))
      
    } else if (parsedData.hasOwnProperty("start_calibration")) {
      dispatch(toggleTeatCalibration(true))
    } else if (parsedData.hasOwnProperty("stop_calibration")) {
      dispatch(toggleTeatCalibration(false))
    }
  }

  const getVacStatus = () => {
    client.write("get_vacinfo()");
  }

  const getCurState = () => {
    client.write("get_curmode()");
  }

  const getCurMode = () => {
    client.write("get_curstate()")
  }

  const getWashHistory = () => {
    client.write("get_washhistory()")
  }

  const getLastWashes = () => {
    client.write("get_lastwashes()")
  }

  const getMilkingHistory = () => {
    client.write("get_milkinghistory()")
  }

  const getAlarmHistory = () => {
    client.write("get_eventmessages()")
  }

  const getGlobalSettings = () => {
    client.write("get_globalsettings()")
  }

  client.on('error', async () => {
    console.error('TCP connection ERROR', "Check Connection");
    dispatch(changeConnectionStatusAction(false))
    // setIsConnected(false);
    // client.end();
  })

  client.on('connect', async () => {
    // dispatch(deletaAlarm(0))
    console.log("kek");
    dispatch(changeConnectionAction(client))
    client.write("auto_status_on()");
    setTimeout(getCurState, 500)
    setTimeout(getCurMode, 100)
    setTimeout(getVacStatus, 1500)
    setTimeout(getWashHistory, 2000)
    setTimeout(getLastWashes, 2500)
    setTimeout(getMilkingHistory, 3000)
    setTimeout(getAlarmHistory, 3500)
    setTimeout(getGlobalSettings, 4000)
    // setTimeout(getCowParams, 4500)
  });

  client.on('close', async() => {
    console.log('Connection closed');
    const netuti = currentModeVal
    setTimeout(connectionToTcpServer, 15000);
    dispatch(changeConnectionStatusAction(false))
    // setIsConnected(false)
    // console.log(netuti);
    //   const time = new Date()
    //   const mm = time.getMinutes().toString().padStart(2, '0');
    //   const hh = time.getHours().toString().padStart(2, '0');
    //   const formattedTime = `${hh}:${mm}`;
    //   console.log(formattedTime);
    //   console.log(currentMode);
    //   dispatch(addDisconnectAlarm({nameID: 666, dateTime: Moment().format('HH:mm D MMM'), msgType: "Авария", msgDecription: "666 Нет связи с КСПВ"}))
    //   dispatch(changeMainAction(10))
  })

  client.on('data', async (data) => {
    dispatch(changeConnectionStatusAction(true))
    let array = data.toString().split(/(\}\}\}|\}\}|\)}|\]}|\))/).filter(Boolean);
    console.log(array);
    if (array.length === 1) {
      await checkType(array[0]);
    } else {
     
      for (let i = 0; i < array.length; i += 2) {
        
        if (i + 1 < array.length) {
         
          await checkType(array[i] + array[i + 1]);
        } else {
          
          await checkType(array[i]);
        }
      }
    }
    clearTimeout(timeout);
    startTimeout();
  });

  client2.on('data', async (data) => {
    dispatch(changeConnectionStatusAction(true))
    let array = data.toString().split(/(\)|\]}|\}\})/).filter(Boolean);
    // console.log(array);
    if (array.length === 1) {
      await checkMap(array[0]);
    } else {
     
      for (let i = 0; i < array.length; i += 2) {
        
        if (i + 1 < array.length) {
         
          await checkMap(array[i] + array[i + 1]);
        } else {
          
          await checkMap(array[i]);
        }
      }
    }
    
    // console.log(data.toString());
  });

  client2.on('error', async () => {
    console.error('TCP connection ERROR', "Check Connection");
    client2.end();
  })
 

  client2.on('close', async() => {
    console.log('Connection closed');
    setTimeout(connectionToCamera, 15000);
  })

  client2.on('connect', async () => {
    console.log("Состыковались");
    // setTimeout(client2.write("start"), 1000)
    dispatch(changeCameraConnectionAction(client2))
  });

  const cancelCameraConnection = () => {
    setTimeout(client2.end(), 1000)
    console.log("end");}

  const sendTcpDataCamera = async (data) => {
    if (cameraConnection && cameraConnection.writable) {
      cameraConnection.write(data);
    } else {
      console.error("TCP connection in not available")
    }
  }

  let timeout;
  const startTimeout = async () => {
    timeout = setTimeout(() => {
      
      client.end
    }, 15000);
  };

  const sendTcpData = async (data) => {
    if (connection && connection.writable) {
      connection.write(data);
    } else {
      console.error("TCP connection in not available")
    }
  }

  return {
    connectionToTcpServer,
    sendTcpData,
    client,
    connectionToCamera,
    cancelCameraConnection,
    sendTcpDataCamera
  }
}

export default useTcpConnection











// const net = require('net');

// const serverHost = '10.5.130.240';
// const serverPort = 12000;

// let socket = null

// const connectToServer = () => {
//   socket = new net.Socket();
//   const dispatch = useDispatch()
//   socket.on('connect', () => {
//     console.log('Connected to server.');
//   });

//   socket.on('data', (data) => {
//         if (data.toString().includes("all_state")) {
//           const modifiedData = data.toString().replace(/[a-zA-Z()_]/g, '');
//           const dataArray = modifiedData.split(";")
//           const dataObj = {}
//           for (let i = 0; i < dataArray.length; i += 2) {
//             dataObj[`i${dataArray[i]}`] = parseFloat(dataArray[(i + 1)])
//           }
//           console.log(dataObj);
//           dispatch(updateShemeValueAction(dataObj))
//         } else {
//           console.log(data.toString());
//         }
//       });

//   socket.on('error', (error) => {
//     console.error('Connection error:', error.message);
//   });

//   socket.on('close', () => {
//     console.log('Connection closed.');
//   });

//   socket.connect({ host: serverHost, port: serverPort });
// };

// const sendMessageToServer= (message) => {
//   if (socket && socket.writable) {
//     socket.write(message);
//   }
// };

// export {sendMessageToServer, connectToServer}
