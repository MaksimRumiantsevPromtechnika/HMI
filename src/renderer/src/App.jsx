
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import Header from './components/header/Header'
import Monitor from './components/monitor/Monitor';
import useTcpConnection from './services/tcpService';
// import { connectionToTcpServer, sendTcpData } from './services/tcpService';
function App() {
  const [connection, setConnection] = useState(null);
  const connectChange = (adress) => {
    setConnection(adress)
  }

  const dispatch = useDispatch()

  const TcpConnecion = useTcpConnection()
  useEffect(() => {
    TcpConnecion.connectionToTcpServer();

  }, [])



  // useEffect(() => {
  //   // Подключение к серверу TCP при запуске приложения
  //   connectToServer();

  //   sendMessageToServer("auto_status_on()")
  //   // Опционально: Закрыть соединение при выгрузке компонента (например, при завершении приложения)
  // }, []);


  return (
    <div className='App'>
      <Header />
      <Monitor
        connectChange={connectChange}
        connection={connection} />
    </div>
  );
}

export default App
