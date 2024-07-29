import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment/dist/moment';
import 'moment/dist/locale/ru';
import useTcpConnection from '../../../../services/tcpService';
//Окно управления промывками
const CleanControl = () => {
  const TcpConnection = useTcpConnection()
  const washHistory = useSelector(state => state.washInfo.washingHistory)
  return (
    <>
      <div className="cleaning-control-header">
        <div className="cl-icon cleaning-icon"></div>
        <div className="cl-icon atention-icon"></div>
        <div className="cl-icon date-icon"></div>
        <div className="cl-icon container-icon"></div>
      </div>
      {/* Кислотная промывка и насос */}
      <div className="acid-control-bar">
        <button className="cl-bar-button clean-nav-button sidetouch acid-cleaning-icon" onClick={() => TcpConnection.sendTcpData("start_wash(0)")} value="HomePage" id="status-acid"></button>
        <div className="cl-bar-atention-icon acid-atention atention-active"></div>
        <div className="cl-date-value">
          <p>{moment(washHistory.i0, 'DD.MM.YYYY HH:mm:ss').locale('ru').format('DD MMMM HH:mm')}</p>
        </div>
        <div className="cl-bar-button clean-nav-button sidetouch acid-container-icon" id="status-pump-acid" onClick={() => TcpConnection.sendTcpData("set_on(9)")}></div>
      </div>
      {/* Щелочная промывка и насос */}
      <div className="alkaline-control-bar">
        <button className="cl-bar-button clean-nav-button sidetouch alkaline-cleaning-icon" onClick={() => TcpConnection.sendTcpData("start_wash(1)")} id="status-alkaline"></button>
        <div className="cl-bar-atention-icon alkaline-atention atention-active"></div>
        <div className="cl-date-value acid-value">
          <p>{moment(washHistory.i1, 'DD.MM.YYYY HH:mm:ss').locale('ru').format('DD MMMM HH:mm')}</p>
        </div>
        <div className="cl-bar-button clean-nav-button sidetouch alkaline-container-icon" id="status-pump-alkaline" onClick={() => TcpConnection.sendTcpData("set_on(13)")}></div>
      </div>
      {/* Промывка линий и насос надуксусной кислоты */}
      <div className="line-rinsing-bar">
        <div className="cl-bar-button sidetouch clean-nav-button line-rinsing-icon" onClick={() => TcpConnection.sendTcpData("start_wash(2)")} id="status-line-rising"></div>
        <div className="cl-bar-atention-icon line-rinsing-atention atention-active"></div>
        <div className="cl-date-value line-rinsing-value">
          <p>{moment(washHistory.i2, 'DD.MM.YYYY HH:mm:ss').locale('ru').format('DD MMMM HH:mm')}</p>
        </div>
        <div className="cl-bar-button sidetouch clean-nav-button peracetic-container-icon" id="status-pump-peracetic" onClick={() => TcpConnection.sendTcpData("set_on(17)")}></div>
      </div>
      {/* Ополаскивание УДР и подача моющего средства на щетки */}
      <div className="robot-rinsing-bar">
        <div className="cl-bar-button sidetouch clean-nav-button robot-rinsing-icon" id="status-robot-rising" onClick={() => TcpConnection.sendTcpData("start_wash(3)")}></div>
        <div className="cl-bar-atention-icon robot-rinsing-atention atention-active"></div>
        <div className="cl-date-value robot-rinsing-value">
          <p>{moment(washHistory.i3, 'DD.MM.YYYY HH:mm:ss').locale('ru').format('DD MMMM HH:mm')}</p>
        </div>
        <div className="cl-bar-button sidetouch robot-rinsing-container-icon"
          onTouchStart={(e) => TcpConnection.sendTcpData("set_on(0)")}
          onTouchEnd={() => TcpConnection.sendTcpData("set_off(0)")}
        ></div>
      </div>
      {/* Подача йода */}
      <div className="iodine-valve">
        <div className="cl-bar-button clean-nav-button sidetouch iodine-valve-icon" id="graphics"
          onTouchStart={(e) => TcpConnection.sendTcpData("set_on(0)")}
          onTouchEnd={() => TcpConnection.sendTcpData("set_off(0)")}
        ></div>
      </div>
    </>
  );
}

export default CleanControl;