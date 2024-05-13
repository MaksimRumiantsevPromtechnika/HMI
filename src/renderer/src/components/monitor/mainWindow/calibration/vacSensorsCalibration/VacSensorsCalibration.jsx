import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useTcpConnection from "../../../../../services/tcpService";

const VacSensorsCalibration = ({ vacSensorsPopup, vacPopupClose }) => {

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
      open={vacSensorsPopup}
    >
      <DialogContent sx={{ padding: "0px" }}>
        <div className="vac-popup-content">
          <div className="vac-bar vac-popup-left-bar">
            <button style={{ borderColor: (1) == selectedSensor ? "#25be2c" : "#2A569A" }} onClick={() => calibrationMode ? TcpConnection.sendTcpData("start_vaccalibration(4)") : TcpConnection.sendTcpData("start_vactest(4)")} className={
              (() => {
                switch (calibrationMode) {
                  case true:
                    switch (vacStatus.c4) {
                      case "0":
                        return "vac-default button vac-sensor";
                      case "1":
                        return "vac-warning button vac-sensor";
                      case "2":
                        return "vac-calibrate button vac-sensor";
                      default:
                        return 'vac-default button vac-sensor';
                    }
                  case false:
                    switch (vacStatus.t4) {
                      case "0":
                        return "vac-default button vac-sensor";
                      case "1":
                        return "vac-warning button vac-sensor";
                      case "2":
                        return "vac-calibrate button vac-sensor";
                      default:
                        return 'vac-default button vac-sensor';
                    }
                }
              })()} id="1"></button>
            <button style={{ borderColor: (2) == selectedSensor ? "#25be2c" : "#2A569A" }} onClick={() => calibrationMode ? TcpConnection.sendTcpData("start_vaccalibration(2)") : TcpConnection.sendTcpData("start_vactest(2)")} className={
              (() => {
                switch (calibrationMode) {
                  case true:
                    switch (vacStatus.c2) {
                      case "0":
                        return "vac-default button vac-sensor";
                      case "1":
                        return "vac-warning button vac-sensor";
                      case "2":
                        return "vac-calibrate button vac-sensor";
                      default:
                        return 'vac-default button vac-sensor';
                    }
                  case false:
                    switch (vacStatus.t2) {
                      case "0":
                        return "vac-default button vac-sensor";
                      case "1":
                        return "vac-warning button vac-sensor";
                      case "2":
                        return "vac-calibrate button vac-sensor";
                      default:
                        return 'vac-default button vac-sensor';
                    }
                }
              })()} id="2"></button>
            <button style={{ backgroundColor: calibrationMode ? "#ffffff" : "#d4ddeb" }} className="button sensor-test" id="sensor-test" onClick={() => setCalibrationMode(!calibrationMode)}></button>
          </div>
          <div className="vac-popup-cow"></div>
          <div className="vac-bar vac-popup-right-bar">
            <button style={{ borderColor: (3) == selectedSensor ? "#25be2c" : "#2A569A" }} onClick={() => calibrationMode ? TcpConnection.sendTcpData("start_vaccalibration(3)") : TcpConnection.sendTcpData("start_vactest(3)")} className={
              (() => {
                switch (calibrationMode) {
                  case true:
                    switch (vacStatus.c3) {
                      case "0":
                        return "vac-default button vac-sensor";
                      case "1":
                        return "vac-warning button vac-sensor";
                      case "2":
                        return "vac-calibrate button vac-sensor";
                      default:
                        return 'vac-default button vac-sensor';
                    }
                  case false:
                    switch (vacStatus.t3) {
                      case "0":
                        return "vac-default button vac-sensor";
                      case "1":
                        return "vac-warning button vac-sensor";
                      case "2":
                        return "vac-calibrate button vac-sensor";
                      default:
                        return 'vac-default button vac-sensor';
                    }
                }
              })()} id="3"></button>
            <button style={{ borderColor: (4) == selectedSensor ? "#25be2c" : "#2A569A" }} onClick={() => calibrationMode ? TcpConnection.sendTcpData("start_vaccalibration(1)") : TcpConnection.sendTcpData("start_vactest(1)")} className={
              (() => {
                switch (calibrationMode) {
                  case true:
                    switch (vacStatus.c1) {
                      case "0":
                        return "vac-default button vac-sensor";
                      case "1":
                        return "vac-warning button vac-sensor";
                      case "2":
                        return "vac-calibrate button vac-sensor";
                      default:
                        return 'vac-default button vac-sensor';
                    }
                  case false:
                    switch (vacStatus.t1) {
                      case "0":
                        return "vac-default button vac-sensor";
                      case "1":
                        return "vac-warning button vac-sensor";
                      case "2":
                        return "vac-calibrate button vac-sensor";
                      default:
                        return 'vac-default button vac-sensor';
                    }
                }
              })()} id="4"></button>
            <button className="button popup-contetn-close" onClick={() => vacPopupClose()}></button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default VacSensorsCalibration;