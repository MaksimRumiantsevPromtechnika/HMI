import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import moment from "moment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useTcpConnection from "../../../../../services/tcpService";

const AntennaCalibration = ({ antennaPopup, antennaPopupClose }) => {

  const dispath = useDispatch()
  const TcpConnection = useTcpConnection()
  const vacStatus = useSelector(state => state.vacCalibration.vacStatus)
  const testStatus = useSelector(state => state.vacCalibration.testStatus)

  const [calibrationMode, setCalibrationMode] = useState(true)

  const [selectedSensor, setSelectedSensor] = useState(6)
  const swapSensor = (e) => {
    setSelectedSensor(e.target.id)
  }

  return (
    <Dialog sx={{ padding: "0px", width: "100%", }} PaperProps={{
      style: {
        backgroundColor: '#2a569a',
        borderRadius: 10,
        boxShadow: 'none',
        maxWidth: "1000px"
      },
    }}
      BackdropProps={{ style: { backgroundColor: "rgb(255, 255, 255, .66)", backdropFilter: "blur(2px)" } }}
      open={antennaPopup}
    >
      <DialogContent sx={{ padding: "0px" }}>
        <div className="antenna-popup-content">
          <div style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
            <div className="vac-bar vac-popup-left-bar">
              <button className="button teat-cup-start" ></button>
            </div>
            <input style={{ marginLeft: '5px', marginRight: '5px', fontSize: '20px', width: "250px" }} className='configuration-item-button' value={`2235110945679123`} readOnly />
            <div className="vac-bar vac-popup-right-bar">
              <button className="button popup-contetn-close" onClick={() => antennaPopupClose()}></button>
            </div>
          </div>
          <div className="progress">
            <div className="progress-cl-value">Работа антенны</div>
            <div className="progress-cl-timer">{`0:11`}</div>
            <div className="progress-inner" style={{
              width: "26%",
              height: '100%',
              background: '#25be2c',
            }}></div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default AntennaCalibration;