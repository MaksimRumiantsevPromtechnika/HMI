import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import '/public/ag-grid.css'; // Core grid CSS, always needed
import '/public/ag-theme-balham.css'; // Optional theme CSSC:\Action\ViteHmi\hmi\node_modules\ag-grid-community\styles\ag-theme-alpine.css
import '../../../../App.css'
import { useSelector } from 'react-redux';
import MilkingReport from './milkingReport/MilkingReport';
import useTcpConnection from '../../../../services/tcpService';
//Окно исторического доения
//Для таблиц используется библиотеке AgGrid
const MilkInfo = React.memo(() => {
  const rowHeight = 28;
  const gridRef = useRef();
  const milkingInfo = useSelector(state => state.milkingHistory.milkingHistory)
  const [filter, setFilter] = useState(false);
  const [filterData, setFilterData] = useState()
  const [selectedRow, setSelectedRow] = useState();
  const [reportStatus, setReportStatus] = useState(false)
  const toggleFilter = () => {
    setFilter((prev) => !prev);
  };

  const reportStatusClose = () => {
    setReportStatus(false);
  }
  const TcpConnecion = useTcpConnection()
  const reportStatusOpen = (value) => {
    TcpConnecion.sendTcpData(`get_milking_report("${selectedRow}")`)
    setReportStatus(value);

  }

  useEffect(() => {
    setFilterData(milkingInfo.filter(obj => obj.milkAmount.hasOwnProperty("%")));
  }, [milkingInfo]);


  const [columnDefs, setColumnDefs] = useState([
    { headerName: 'Время', field: 'dateTime', width: 140, resizable: true, wrapHeaderText: true, autoHeaderHeight: true, cellClass: "grid-cell-centered", lockPosition: 'left' },
    { headerName: 'Животное', field: 'id', width: 100, resizable: true, wrapHeaderText: true, autoHeaderHeight: true, cellClass: "grid-cell-centered", lockPosition: 'left' },
    { headerName: 'Надой (план/факт)', field: 'milkAmount', width: 150, resizable: true, wrapHeaderText: true, autoHeaderHeight: true, cellClass: "grid-cell-centered", lockPosition: 'left' },
    { headerName: 'ЧВД', field: 'amt', width: 80, resizable: true, wrapHeaderText: true, autoHeaderHeight: true, cellClass: "grid-cell-centered", lockPosition: 'left' },
    { headerName: 'Направление молока', field: 'destination', width: 190, resizable: true, wrapHeaderText: true, autoHeaderHeight: true, cellClass: "grid-cell-centered", lockPosition: 'left' },
    { headerName: 'Результат', field: 'result', width: 155, resizable: true, wrapHeaderText: true, autoHeaderHeight: true, cellClass: "grid-cell-centered", lockPosition: 'left' },
    { headerName: 'Оригинальное время', field: 'milkOrigTime', width: 0, resizable: false, cellClass: "grid-cell-centered", lockPosition: 'left', hide: true }
  ]);

  const cellClickedListener = useCallback(event => {
    setSelectedRow(event.data.milkOrigTime)
  }, []);



  return (
    <div>
      <div className="ag-theme-alpine" style={{ width: 834, height: 477, margin: 3, display: reportStatus ? "none" : "" }}>

        <AgGridReact
          ref={gridRef}
          rowHeight={rowHeight}
          rowData={filter ? filterData : milkingInfo}
          columnDefs={columnDefs}
          rowSelection='multiple'
          overlayNoRowsTemplate='<span style="padding: 10px; border: 2px solid #444; background: lightgoldenrodyellow;">Нет данных для отображения</span>'
          onCellClicked={cellClickedListener}
        />
        <button className="button milk-filter sidetouch" style={{ backgroundColor: filter ? 'rgba(42, 86, 154, 0.66)' : '', }} onClick={toggleFilter}></button>
        <button className="button milk-search sidetouch" onClick={() => reportStatusOpen(true)}></button>
      </div>
      <MilkingReport
        reportStatusClose={reportStatusClose}
        reportStatus={reportStatus}
      ></MilkingReport>
    </div>
  );
})

export default MilkInfo;