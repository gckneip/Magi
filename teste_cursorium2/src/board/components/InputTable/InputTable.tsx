import "./styles/InputTable.css"
import { DataGrid, GridColDef, GridEventListener } from '@mui/x-data-grid';
import { useState } from 'react';

type Row = {
  id: number;
  A: string;
  B: string;
  S: string;
};

export default function DataTable() {
  const [rows, setRows] = useState<Row[]>([
    { id: 1, A: '', B: '', S: '' },
    { id: 2, A: '', B: '', S: '' },
    { id: 3, A: '', B: '', S: '' },
    { id: 4, A: '', B: '', S: '' },
    { id: 5, A: '', B: '', S: '' },
    { id: 6, A: '', B: '', S: '' },
    { id: 7, A: '', B: '', S: '' },
    { id: 8, A: '', B: '', S: '' },
    { id: 9, A: '', B: '', S: '' },
  ]);

  const columns: GridColDef[] = [
    { field: 'A', headerName: 'A', flex: 1, editable: true, headerClassName:'GridColumnHeader',headerAlign:'center' },
    { field: 'B', headerName: 'B', flex: 1, editable: true, headerClassName:'GridColumnHeader',headerAlign:'center' },
    { field: 'S', headerName: 'S', flex: 2, editable: true, headerClassName:'GridColumnHeader',headerAlign:'center' },
  ];

  const handleCellKeyDown: GridEventListener<'cellKeyDown'> = (params, event) => {
    const column = params.field as keyof Row;
    const rowId = params.id as number;
    const rowIndex = rows.findIndex((row) => row.id === rowId);
    if (rowIndex === -1) return;

    const row = rows[rowIndex];
    const cellValue = row[column] as string || '';

    if (cellValue.length >= 1 && event.key !== 'Backspace') {
      event.preventDefault();
      return;
    }

    const newRows = [...rows];
    switch (event.key) {
      case '0':
        newRows[rowIndex] = { ...row, [column]: '0' };
        setRows(newRows);
        break;
      case '1':
        newRows[rowIndex] = { ...row, [column]: '1' };
        setRows(newRows);
        break;
      case 'Backspace':
        newRows[rowIndex] = { ...row, [column]: '' };
        setRows(newRows);
        break;
      default:
        event.preventDefault();
        newRows[rowIndex] = { ...row, [column]: '0' };
        setRows(newRows);
    }
  };

  return (
    <div className="InputTableDiv">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[9]}
        disableRowSelectionOnClick
        hideFooter
        disableColumnMenu
        disableColumnResize
        disableColumnSorting
        onCellKeyDown={handleCellKeyDown}
        className='InputTable'
        />
    </div>
  );
}
