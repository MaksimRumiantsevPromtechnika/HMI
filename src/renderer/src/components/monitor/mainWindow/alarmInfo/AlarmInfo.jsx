import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import '/public/ag-grid.css'; // Core grid CSS, always needed
import '/public/ag-theme-balham.css'; // Optional theme CSSC:\Action\ViteHmi\hmi\node_modules\ag-grid-community\styles\ag-theme-alpine.css
import '../../../../App.css'
import { useDispatch, useSelector } from 'react-redux';
import { addHistoryAlarm, addNewAlarm, addNewHistory, deletaAlarm } from '../../../../store/alarmReducer';
import useTcpConnection from '../../../../services/tcpService';

const AlarmInfo = () => {
  const alarmInfo = useSelector(state => state.alarmReducer)
  const rowHeight = 28;
  const gridRef = useRef(); // Optional - for accessing Grid's API
  const [rowData, setRowData] = useState();

  const [historyData, setHistoryData] = useState();//
  const [filterData, setFilterData] = useState();
  const [filter, setFilter] = useState(false);

  const toggleFilter = () => {
    setFilter((prev) => !prev);
  };

  const [selectedAlarm, setSelectedAlarm] = useState();

  const [selecterAlarmData, setSelectedAlarmData] = useState()

  const dispatch = useDispatch()

  const stopAlarm = () => {
    if (selectedAlarm >= 0) {
      dispatch(deletaAlarm(selectedAlarm))
      // dispatch(addHistoryAlarm(selecterAlarmData))
      dispatch(addNewHistory(selecterAlarmData))
      setSelectedAlarm();
      setSelectedAlarmData();
    }
  }

  const cellClickedListener = useCallback(event => {
    setSelectedAlarm(event.data.id);
    setSelectedAlarmData(event.data);
    // console.log(event.data);
  });

  useEffect(() => {
    let alarmArray = alarmInfo.newAlarmList
    let alarmArrayList = alarmArray.map((obj, index) => {
      return { ...obj, id: index }
    });
    let valueType = "Авария";
    let newArray = [];
    alarmArrayList.forEach(item => {
      if (item["Тип сигнализации"] === valueType) {
        newArray.unshift(item);
      } else {
        newArray.push(item);
      }
    });
    setRowData(newArray)
  }, [alarmInfo.newAlarmList]);

  useEffect(() => {
    setHistoryData(alarmInfo.alarmHistory)
    setFilterData(alarmInfo.alarmHistory.filter(obj => obj.msgType === "Авария" || obj.msgType === "Ошибка"));
  }, [alarmInfo.alarmHistory]);


  const [NewColumnDefs, setNewColumnDefs] = useState([
    { headerName: 'Время', field: 'dateTime', width: 134, resizable: false, wrapHeaderText: true, autoHeaderHeight: true, cellClass: "grid-cell-centered", lockPosition: 'left' },
    // { headerName: 'Тип', field: 'msgType', width: 230, resizable: false, wrapHeaderText: true, autoHeaderHeight: true, cellClass: "grid-cell-centered", lockPosition: 'left' },
    // { headerName: 'Номер', field: 'nameID', width: 79, resizable: false, wrapHeaderText: true, autoHeaderHeight: true, cellClass: "grid-cell-centered", lockPosition: 'left' },
    { headerName: 'Наименование', field: 'msgDecription', width: 579, resizable: false, wrapHeaderText: true, autoHeaderHeight: true, cellClass: "grid-cell-centered", lockPosition: 'left' }
  ]);

  const [columnDefs, setColumnDefs] = useState([
    { headerName: 'Время', field: 'dateTime', width: 134, resizable: false, wrapHeaderText: true, autoHeaderHeight: true, cellClass: "grid-cell-centered", lockPosition: 'left' },
    // { headerName: 'Тип', field: 'msgType', width: 230, resizable: false, wrapHeaderText: true, autoHeaderHeight: true, cellClass: "grid-cell-centered", lockPosition: 'left' },
    // { headerName: 'Номер', field: 'nameID', width: 79, resizable: false, wrapHeaderText: true, autoHeaderHeight: true, cellClass: "grid-cell-centered", lockPosition: 'left' },
    { headerName: 'Наименование', field: 'msgDecription', width: 579, resizable: false, wrapHeaderText: true, autoHeaderHeight: true, cellClass: "grid-cell-centered", lockPosition: 'left' }
  ]);

  return (
    <>
      <div className='new-alarm'>
        <div className="ag-theme-alpine" style={{ width: 732, height: 161, margin: 3, }}>
          <AgGridReact
            ref={gridRef}
            rowHeight={rowHeight}
            rowData={rowData}
            columnDefs={NewColumnDefs}
            rowSelection='multiple'
            overlayNoRowsTemplate='<span style="padding: 10px; border: 2px solid #444; background: lightgoldenrodyellow;">Нет данных для отображения</span>'
            onCellClicked={cellClickedListener}
          />
        </div>
        <button className="button stop-alarm sidetouch" onClick={stopAlarm}></button>
      </div>
      <div className='list-of-alarm'>
        <div className="ag-theme-alpine" style={{
          width: 732, height: 394
          , margin: 3,
        }}>
          <AgGridReact
            ref={gridRef}
            rowHeight={rowHeight}
            rowData={filter ? filterData : historyData}
            columnDefs={columnDefs}
            rowSelection='multiple'
            overlayNoRowsTemplate='<span style="padding: 10px; border: 2px solid #444; background: lightgoldenrodyellow;">Нет данных для отображения</span>'
          />
        </div>
        <button className="button filter-alarm sidetouch" style={{ backgroundColor: filter ? 'rgba(42, 86, 154, 0.66)' : '', }} onClick={toggleFilter}></button>
      </div>
    </>
  );
}

export default AlarmInfo;