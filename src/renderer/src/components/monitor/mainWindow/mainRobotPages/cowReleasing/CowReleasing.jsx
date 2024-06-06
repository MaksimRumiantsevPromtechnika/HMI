import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMilking } from "../../../../../store/hmiMode";

const CowReleasing = () => {
  const main = useSelector(state => state.mode.main)
  const cowInfo = useSelector(state => state.cow.cowInfo)
  const allState = useSelector(state => state.shemeValue.shemeValue)
  const milkingInfo = useSelector(state => state.milking.milkingList)
  const pastPath = useSelector(state => state.milking.pastPath)
  const pastCow = useSelector(state => state.milking.pastCow)
  const dispatch = useDispatch();
  const [milkAmount, setMilkAmount] = useState(0)
  return (
    <>
      <div className="status-cow-in-cell-bar">
        <div className="status-wait-icon home-status-icon" style={{ display: (allState.i41 === 0 && main == "1") ? "" : "none" }} />
        <div className="status-cow-in-cell-icon home-status-icon" style={{ display: (allState.i41 === 0 && main == "7") ? "" : "none" }} />
        <div className="status-cow-icon home-status-icon" style={{ display: ((main == "8" && (allState.i39 === 0 && allState.i38 === 0) && (((milkingInfo.length - 1) >= 0 && (milkingInfo[milkingInfo.length - 1].milk).toFixed(1) == 0) || (milkingInfo.length) == 0) && allState.i41 === 0 && main == "8") || ((allState.i41 === 0 && main == "8" && ((allState.i39 === 1) || allState.i38 === 1)) && (milkingInfo.length) == 0)) ? "" : "none" }} />
        <div className="status-cow-milking-icon home-status-icon" style={{ display: ((main == "8" && (milkingInfo.length - 1) >= 0 && (milkingInfo[milkingInfo.length - 1].milk).toFixed(1) > 0) && allState.i41 === 0) && allState.i41 === 0 ? "" : "none" }} />
        <div className="pump-icon home-status-icon" style={{ display: allState.i41 === 1 ? "" : "none" }} />
        <div className="cow-in-cell-id" style={{ display: (allState.i41 === 1 ? "" : "none") }}>{pastCow}</div>
        <div className="cow-in-cell-id" style={{ display: ((allState.i41 === 1 || main == "1") ? "none" : "") }}>{cowInfo.id}</div>
      </div>

      <div className="status-milk-transport-bar" style={{ display: ((main == "1" && (allState.i39 === 1 || allState.i38 === 1)) || (main == "7") || (main == "8" && (allState.i39 === 1 || allState.i38 === 1) && (milkingInfo.length) == 0)) || allState.i41 === 1 ? "" : "none" }}>
        <div className="status-milk-bar" style={{ display: "flex" }}>
          <div className="status-milk-transport-status">
            <div className="status-milk-status transport-status-pump" style={{ display: (allState.i39 === 1 || allState.i38 === 1) || allState.i41 === 1 ? "" : "none" }} />
            <div className="status-milk-status transport-status-ok" style={{ display: (allState.i39 === 0 && allState.i38 === 0) && allState.i41 === 0 ? "" : "none" }} />
          </div>
          <div className="status-milk-transport-arrow" />
          <div className="status-milk-transport-place">
            <div className="status-milk-transport transport-tanker" style={{ display: (cowInfo.milkDestination === 0 ? "" : "none") }} />
            <div className="status-milk-transport transport-drain" style={{ display: (cowInfo.milkDestination === 2 ? "" : "none") }} />
            <div className="status-milk-transport transport-backet" style={{ display: (cowInfo.milkDestination === 1 ? "" : "none") }} />
          </div>
        </div>
        <div className="conductivity-bar" style={{ display: "flex", fontSize: "35px" }}>
          <div className="conductivity"></div>
          <div className="conductivity-value" style={{ marginLeft: "10px" }}>22%</div>
        </div>
      </div>
      <div className="milking-bar" style={{ display: (((main == "8" && (allState.i39 === 0 && allState.i38 === 0) && (milkingInfo.length) == 0) || (main == "8" && (milkingInfo.length) > 0)) && allState.i41 === 0) ? "" : "none" }}>
        <div className="milking-path transport-tanker" style={{ display: (cowInfo.milkDestination === 0 && (milkingInfo.length - 1) >= 0 && (milkingInfo[milkingInfo.length - 1].milk).toFixed(1) > 0 ? "" : "none") }} />
        <div className="milking-path transport-backet" style={{ display: ((cowInfo.milkDestination === 1 || ((milkingInfo.length - 1) >= 0 && (milkingInfo[milkingInfo.length - 1].milk).toFixed(1) == 0) || (milkingInfo.length) == 0) ? "" : "none"), marginRight: "12px" }} />
        <div className="milking-path transport-drain" style={{ display: ((cowInfo.milkDestination === 2 && (milkingInfo.length - 1) >= 0 && (milkingInfo[milkingInfo.length - 1].milk).toFixed(1) > 0) ? "" : "none") }} />
        <div className="milking-amount">{milkingInfo.length == 0 ? "0,0" : (((milkingInfo[milkingInfo.length - 1].milk).toFixed(1) / 30).toFixed(1)).replace(".", ",")}</div>
      </div>
      <button className="button graph-swap sidetouch" style={{ display: (main == "8") ? "" : "none" }} onClick={() => dispatch(toggleMilking())} />
    </>
  );
}

export default CowReleasing;