import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { alarmReducer } from "./alarmReducer";
import { bucketInfoReducer } from "./bucketReducer";
import { cameraMap } from "./cameraReducer";
import { clean } from "./cleanReducer";
import { configuratorReduser } from "./configuratorReducer";
import { connectionReducer } from "./connectionReducer";
import { cowInfoReducer } from "./cowInfoReducer";
import { teatInfoReducer } from "./cupsInfoReducer";
import { cupStatusReduser } from "./cupStatusReducer";
import { hmiModeReducer } from "./hmiMode";
import { mainSettingsReduser } from "./mainSettingsReduser";
import { milkingHistory } from "./milkingHistoryReducer";
import { milkingReducer } from "./milkingReducer";
import { milkReportReducer } from "./milkReportReducer";
import { shemeInfoReducer } from "./schemeInfoReducer";
import { vacCalibrationReducer } from "./vacCalibrationReducer";
import { washReducer } from "./washInfoReducer";
import { washReportReducer } from "./washReportReducer";
//Список редюсеров
const rootReducer = combineReducers({
  globalSettings: mainSettingsReduser,
  mode: hmiModeReducer,
  shemeValue: shemeInfoReducer,
  connection: connectionReducer,
  vacCalibration: vacCalibrationReducer,
  configurator: configuratorReduser,
  cupStatus: cupStatusReduser,
  washInfo: washReducer,
  alarmReducer: alarmReducer,
  cow: cowInfoReducer,
  teats: teatInfoReducer,
  buckets: bucketInfoReducer,
  milking: milkingReducer,
  washHistory: clean,
  milkingHistory: milkingHistory,
  cameraMap: cameraMap,
  washReport: washReportReducer,
  milkReport: milkReportReducer
})

export const store = createStore(rootReducer, composeWithDevTools())
