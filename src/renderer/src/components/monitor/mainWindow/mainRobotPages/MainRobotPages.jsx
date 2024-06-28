import { useSelector } from "react-redux";
import AcidClean from "./acidClean/AcidClean";
import AlkalineClean from "./alkalineClean/AlkalineClean";
import CowReleasing from "./cowReleasing/CowReleasing";
import InputID from "./inputID/InputID";
import LineRising from "./lineRising/LineRising";
import PumpAcid from "./pumpAcid/PumpAcid";
import PumpAlkaline from "./pumpAlkaline/PumpAlkaline";
import PumpPeracetic from "./pumpPeracetic/pumpPeracetic";
import RobotRising from "./robotRising/RobotRising";
import WaitStatus from "./waitStatus/WaitStatus";
import YeldClean from "./milking/Milking";
import Milking from "./milking/Milking";
import CowLock from "./cowLock/cowLock";
import MilkingFirstScreen from "./milkingFirstScreen.jsx/MilkingFirstScreen";

const MainRobotPages = () => {

  const main = useSelector(state => state.mode.main)
  const milking = useSelector(state => state.mode.milking)

  return (
    <>
      <div className={(main === "8" && milking == true) ? "graphics home-status status-active" : "graphics home-status"}>
        <Milking></Milking>
      </div>
      <div className={main === "3" ? "status-acid home-status status-active" : "status-acid home-status"}>
        <AcidClean />
      </div>
      <div className={main === "4" ? "status-alkaline home-status status-active" : "status-alkaline home-status"}>
        <AlkalineClean></AlkalineClean>
      </div>
      <div className={main === "7" ? "status-cow home-status status-active" : "status-alkaline home-status"}>
        <CowReleasing></CowReleasing>
      </div>
      {/* <div className={main === 5 ? "status-alkaline home-status status-active" : "status-alkaline home-status"}>
        <PumpAcid></PumpAcid>
      </div> */}
      {/* <div className={main === 6 ? "status-alkaline home-status status-active" : "status-alkaline home-status"}>
        <PumpAlkaline></PumpAlkaline>
      </div>
      <div className={main === 7 ? "status-alkaline home-status status-active" : "status-alkaline home-status"}>
        <PumpPeracetic></PumpPeracetic>
      </div> */}
      <div className={main === "1" ? "status-cow home-status status-active" : "status-alkaline home-status"}>
        <CowReleasing></CowReleasing>
      </div>
      <div className={main === "5" ? "status-alkaline home-status status-active" : "status-alkaline home-status"}>
        <LineRising></LineRising>
      </div>
      <div className={main === "6" ? "status-alkaline home-status status-active" : "status-alkaline home-status"}>
        <RobotRising></RobotRising>
      </div>
      <div className={main === "2" ? "status-alkaline home-status status-active" : "status-alkaline home-status"}>
        <InputID></InputID>
      </div>
      <div className={main === "9" ? "status-cow-in-cell home-status status-active" : "status-alkaline home-status"}>
        <CowLock></CowLock>
      </div>
      <div className={(main === "8" && milking == false) ? "status-cow home-status status-active" : "status-alkaline home-status"}>
        <CowReleasing></CowReleasing>
      </div>
    </>
  );
}

export default MainRobotPages;