import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'A', headerName: 'A', width: 50 },
  { field: 'B', headerName: 'B', width: 50 },
  { field: 'S', headerName: 'S', width: 50 },
];

const rows = [
  { id: 1, A: '0'},
  { id: 2, A: '0'},
  { id: 3, A: '0'},
  { id: 4, A: '0'},
  { id: 5, A: '0'},
  { id: 6, A: '0'},
  { id: 7, A: '0'},
  { id: 8, A: '0'},
  { id: 9, A: '0'},
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {pageSize: 9 },

          },
        }}
        pageSizeOptions={[9]}
        //checkboxSelection
        disableRowSelectionOnClick
        //hideFooterPagination
        hideFooter
      />
    </div>
  );
}