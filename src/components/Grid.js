import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

const Grid = ({ rowData, columnDefs, onGridReady }) => {
  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        onGridReady={onGridReady}
        defaultColDef={{
          sortable: true,
          filter: true,
          resizable: true,
        }}
        enableRangeSelection={true}
        clipboardPasteMode={'range'}
      />
    </div>
  );
};

export default Grid;
