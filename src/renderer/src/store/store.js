import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { alarmReducer } from "./alarm";
import { bucketInfoReducer } from "./bucketReducer";
import { cameraMap } from "./cameraReducer";
import { clean } from "./clean";
import { configuratorReduser } from "./configuratorReducer";
import { connectionReducer } from "./connectionReducer";
import { cowInfoReducer } from "./cowInfoReducer";
import { teatInfoReducer } from "./cupsInfoReducer";
import { cupStatusReduser } from "./cupStatusReducer";
import { hmiModeReducer } from "./hmiMode";
import { mainSettingsReduser } from "./mainSettingsReduser";
import { milkingHistory } from "./milkingHistoryReducer";
import { milkingReducer } from "./milkingReducer";
import { shemeInfoReducer } from "./schemeInfoReducer";
import { vacCalibrationReducer } from "./vacCalibration";
import { washReducer } from "./washInfo";

const rootReducer = combineReducers({
  globalSettings: mainSettingsReduser,
  mode: hmiModeReducer,
  shemeValue: shemeInfoReducer,
  connection: connectionReducer,
  vacCalibration: vacCalibrationReducer,
  configurator: configuratorReduser,
  cupStatus: cupStatusReduser,
  washInfo: washReducer,
  alarm: alarmReducer,
  cow: cowInfoReducer,
  teats: teatInfoReducer,
  buckets: bucketInfoReducer,
  milking: milkingReducer,
  washHistory: clean,
  milkingHistory: milkingHistory,
  cameraMap: cameraMap
})

export const store = createStore(rootReducer, composeWithDevTools())
