import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import '/public/ag-grid.css'; // Core grid CSS, always needed
import '/public/ag-theme-balham.css'; // Optional theme CSSC:\Action\ViteHmi\hmi\node_modules\ag-grid-community\styles\ag-theme-alpine.css
import '../../../../App.css'
import { useSelector } from 'react-redux';

const MilkInfo = React.memo(() => {
  console.log("RENDER");
  const rowHeight = 28;
  const gridRef = useRef(); // Optional - for accessing Grid's API

  const milkingInfo = useSelector(state => state.milkingHistory.milkingHistory)
  const [filter, setFilter] = useState(false);
  const [filterData, setFilterData] = useState()
  const toggleFilter = () => {
    setFilter((prev) => !prev);
  };
  useEffect(() => {
    setFilterData(milkingInfo.filter(obj => obj.milkAmount.hasOwnProperty("%")));
  }, [milkingInfo]);

  // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([
    { headerName: 'Время', field: 'dateTime', width: 140, resizable: true, wrapHeaderText: true, autoHeaderHeight: true, cellClass: "grid-cell-centered", lockPosition: 'left' },
    { headerName: 'Животное', field: 'id', width: 100, resizable: true, wrapHeaderText: true, autoHeaderHeight: true, cellClass: "grid-cell-centered", lockPosition: 'left' },
    { headerName: 'Надой (план/факт)', field: 'milkAmount', width: 150, resizable: true, wrapHeaderText: true, autoHeaderHeight: true, cellClass: "grid-cell-centered", lockPosition: 'left' },
    { headerName: 'ЧВД', field: 'amt', width: 80, resizable: true, wrapHeaderText: true, autoHeaderHeight: true, cellClass: "grid-cell-centered", lockPosition: 'left' },
    { headerName: 'Направление молока', field: 'destination', width: 190, resizable: true, wrapHeaderText: true, autoHeaderHeight: true, cellClass: "grid-cell-centered", lockPosition: 'left' },
    { headerName: 'Результат', field: 'result', width: 155, resizable: true, wrapHeaderText: true, autoHeaderHeight: true, cellClass: "grid-cell-centered", lockPosition: 'left' }
  ]);

  // Example of consuming Grid Event
  const cellClickedListener = useCallback(event => {
    console.log('cellClicked', event);
  }, []);

  // Example load data from server
  // useEffect(() => {
  //   fetch('/milk.json')
  //     .then(result => result.json())
  //     .then(rowData => setRowData(rowData))
  // }, []);


  return (
    <div>

      {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
      <div className="ag-theme-alpine" style={{ width: 834, height: 477, margin: 3, }}>

        <AgGridReact
          ref={gridRef} // Ref for accessing Grid's API
          rowHeight={rowHeight}
          // rowData={milkingInfo} // Row Data for Rows
          rowData={filter ? filterData : milkingInfo}
          columnDefs={columnDefs} // Column Defs for Columns

          // Optional - set to 'true' to have rows animate when sorted
          rowSelection='multiple' // Options - allows click selection of rows
          overlayNoRowsTemplate='<span style="padding: 10px; border: 2px solid #444; background: lightgoldenrodyellow;">Нет данных для отображения</span>'
          onCellClicked={cellClickedListener} // Optional - registering for Grid Event
        />
        <button className="button milk-filter sidetouch" style={{ backgroundColor: filter ? 'rgba(42, 86, 154, 0.66)' : '', }} onClick={toggleFilter}></button>
        <button className="button milk-search sidetouch"></button>
      </div>
    </div>
  );
})

export default MilkInfo;