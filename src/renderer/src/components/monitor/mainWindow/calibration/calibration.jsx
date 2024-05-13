import { useState } from "react";
import useTcpConnection from "../../../../services/tcpService";
import AntennaCalibration from "./antennaCalibration/AntennaCalibratiom";
import CameraCalibration from "./cameraCalibration/CameraCalibration";
import FoodCalibration from "./foodCalibration/FoodCalibration";
import TaetCupsCalibration from "./teatCupsCalibration/teatCupsCalibration";
import VacSensorsCalibration from "./vacSensorsCalibration/VacSensorsCalibration";

const Calibration = () => {
  const TcpConnection = useTcpConnection()
  const [cameraPopup, setCameraPopup] = useState(false)
  const cameraPopupClose = () => {
    setCameraPopup(false);
  }

  const cameraPopupOpen = (value) => {
    setCameraPopup(value);
  }

  const [vacSensorsPopup, setVacSensorsPopup] = useState(false)
  const vacPopupClose = () => {
    setVacSensorsPopup(false)
    TcpConnection.sendTcpData("vac_calibclose()")
  }

  const vacPopupOpen = (value) => {
    setVacSensorsPopup(value)
    TcpConnection.sendTcpData(`vac_calibopen()`)
  }

  const [teatCupPopup, setTeatCupPopup] = useState(false)
  const teatCupPopupClose = () => {
    setTeatCupPopup(false)
  }

  const teatCupPopupOpen = (value) => {
    setTeatCupPopup(value)
  }

  const [foodPopup, setFoodPopup] = useState(false);
  const foodPopupClose = () => {
    setFoodPopup(false)
  }

  const foodPopupOpen = (value) => {
    setFoodPopup(value)
  }

  const [antennaPopup, setAntennaPopup] = useState(false);
  const antennaPopupClose = () => {
    setAntennaPopup(false)
  }

  const antennaPopupOpen = (value) => {
    setAntennaPopup(value)
  }
  return (
    <>
      <div className="calibration-bar" style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <button className="calibration-button" onClick={() => vacPopupOpen(true)}> Датчики вакуума </button>
          <button className="calibration-button" onClick={() => teatCupPopupOpen(true)}> Доильные стаканы </button>
          <button className="calibration-button" onClick={() => cameraPopupOpen(true)}> Камера</button>
          <button className="calibration-button" onClick={() => foodPopupOpen(true)}> Корм</button>
          <button className="calibration-button" onClick={() => antennaPopupOpen(true)}> Антена</button>
        </div>
        <div>
          <button className="calibration-button" style={{ marginRight: "10px" }}> Выставочный режим</button>
        </div>
      </div>

      <CameraCalibration
        cameraPopup={cameraPopup}
        cameraPopupClose={cameraPopupClose}
      >
      </CameraCalibration>
      <VacSensorsCalibration
        vacSensorsPopup={vacSensorsPopup}
        vacPopupClose={vacPopupClose}
      >
      </VacSensorsCalibration>
      <TaetCupsCalibration
        teatCupPopup={teatCupPopup}
        teatCupPopupClose={teatCupPopupClose}
      >
      </TaetCupsCalibration>
      <FoodCalibration
        foodPopup={foodPopup}
        foodPopupClose={foodPopupClose}
      >
      </FoodCalibration>

      <AntennaCalibration
        antennaPopup={antennaPopup}
        antennaPopupClose={antennaPopupClose}
      >
      </AntennaCalibration>
    </>
  );
}

export default Calibration;