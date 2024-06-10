import * as React from 'react';
import { DataGrid, GridColDef, GridEventListener} from '@mui/x-data-grid';
import { useState } from 'react';

type Row = {
  id: number;
  A: string;
  B: string;
  S: string;
};

export default function DataTable() {
  const columns: GridColDef[] = [
    { field: 'A', headerName: 'A', flex: 1, editable:true},
    { field: 'B', headerName: 'B', flex: 1, editable:true},
    { field: 'S', headerName: 'S', editable:true},
  ];
  
  const rows:Row[] = [
    { id: 1, A: '', B:'', S:''},
    { id: 2, A: '', B:'', S:''},
    { id: 3, A: '', B:'', S:''},
    { id: 4, A: '', B:'', S:''},
    { id: 5, A: '', B:'', S:''},
    { id: 6, A: '', B:'', S:''},
    { id: 7, A: '', B:'', S:''},
    { id: 8, A: '', B:'', S:''},
    { id: 9, A: '', B:'', S:''},
  ];
  
  
  const handleCellKeyDown: GridEventListener<'cellKeyDown'> = 
  (params, event, details) =>
    {
      const column = params.field as keyof Row;
      const rowId = params.id as number;
      const row = rows.find((row) => row.id === rowId);
      if (!row) return; 

      var cellValue = row[column] || '';

      console.log(cellValue);

      if(((event.code != 'Digit0' && event.code != 'Digit1') || cellValue != '') && event.code != 'Backspace'){
        event.preventDefault();
        return;
      } else {
      }
    };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[9]}
        disableRowSelectionOnClick
        hideFooter
        disableColumnMenu={true} 
        disableColumnResize={true}
        disableColumnSorting={true}
        onCellKeyDown={handleCellKeyDown}
      />
    </div>
  );
}