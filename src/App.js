import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';

const App = () => {
  const [gridApi, setGridApi] = useState(null);
  const [rowData] = useState([
    { name: 'Asteroid 1', diameter: 5.1, date: '2023-10-01', hazardous: 'Y' },
    { name: 'Asteroid 2', diameter: 2.5, date: '2024-01-15', hazardous: 'N' },
  ]);
  const [columnDefs] = useState([
    { headerName: "Name", field: "name", sortable: true, filter: 'agTextColumnFilter' },
    { headerName: "Diameter (km)", field: "diameter", sortable: true, filter: 'agNumberColumnFilter' },
    { headerName: "Date", field: "date", sortable: true, filter: 'agDateColumnFilter', 
      valueFormatter: params => new Date(params.value).toLocaleDateString() },
    { 
      headerName: "Potentially Hazardous", 
      field: "hazardous", 
      sortable: true, 
      filter: 'agTextColumnFilter',
      valueFormatter: params => params.value === 'Y' ? 'Yes' : params.value === 'N' ? 'No' : ''
    }
  ]);

  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  const clearFiltersAndSorters = () => {
    gridApi.setFilterModel(null);
    gridApi.setSortModel(null);
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <h1>Near-Earth Object Overview</h1>
      <button onClick={clearFiltersAndSorters} style={{ marginLeft: '15px' }}>
        Clear Filters and Sorters
      </button>
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={{
            sortable: true,
            filter: true,
            resizable: true,
          }}
          enableRangeSelection={true}
          clipboardPasteMode={'range'}
        />
      </div>
    </div>
  );
};

export default App;