import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import '/public/ag-grid.css'; // Core grid CSS, always needed
import '/public/ag-theme-balham.css'; // Optional theme CSSC:\Action\ViteHmi\hmi\node_modules\ag-grid-community\styles\ag-theme-alpine.css
import '../../../../App.css'
import { useDispatch, useSelector } from 'react-redux';

const WashInfo = () => {
  const rowHeight = 28;
  const gridRef = useRef(); // Optional - for accessing Grid's API
  const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row
  const dispatch = useDispatch;

  const washInfo = useSelector(state => state.washHistory.washHistory)
  // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([
    { headerName: 'Время', field: 'dateTime', width: 205, resizable: true, cellClass: "grid-cell-centered", lockPosition: 'left' },
    { headerName: 'Тип', field: 'washType', width: 205, resizable: true, cellClass: "grid-cell-centered", lockPosition: 'left' },
    { headerName: 'Продолжительность', field: 'washDuration', width: 200, resizable: true, cellClass: "grid-cell-centered", lockPosition: 'left' },
    { headerName: 'Результат', field: 'washStatus', width: 205, resizable: true, cellClass: "grid-cell-centered", lockPosition: 'left' }
  ]);

  // Example of consuming Grid Event
  const cellClickedListener = useCallback(event => {
    console.log('cellClicked', event);
  }, []);

  // Example load data from server
  // useEffect(() => {
  //   fetch('/wash.json')
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
          rowData={washInfo} // Row Data for Rows

          columnDefs={columnDefs} // Column Defs for Columns

          // Optional - set to 'true' to have rows animate when sorted
          rowSelection='multiple' // Options - allows click selection of rows
          overlayNoRowsTemplate='<span style="padding: 10px; border: 2px solid #444; background: lightgoldenrodyellow;">Нет данных для отображения</span>'
          onCellClicked={cellClickedListener} // Optional - registering for Grid Event
        />
        <button className="button wash-search sidetouch"></button>
      </div>
    </div>
  );
}

export default WashInfo;