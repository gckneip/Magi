import { MenuItem, Select } from "@mui/material";
import "./styles/InputTable.css";
import { DataGrid, GridColDef, GridRowId } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';

type Row = {
  id: number;
  S: string;
} & {
  [key: string]: string | number;
};

export default function DataTable() {

  const initialLetters = ['A', 'B', 'C'];
  const initialOutput = [0, 0, 0, 1, 0, 0, 0, 0];

  const [letters, setLetters] = useState(initialLetters);
  const [output, setOutput] = useState(initialOutput);

  if ((Math.pow(2, letters.length)) !== output.length) {
    throw new Error(`Error: output length (${output.length}) does not match the number of variables (${Math.pow(2, letters.length)})`);
  }

  const columns: GridColDef[] = letters.map((letter) => ({
    field: letter,
    headerName: letter,
    flex: 1,
    editable: false,
    headerClassName: 'GridColumnHeader',
    headerAlign: 'center',
  }));

  function decimalToBinary(N: number) {
    return (N >>> 0).toString(2).padStart(letters.length, '0');
  }

  function columnsForTheRows(index: number) {
    const binary = decimalToBinary(index);

    return columns.reduce((acc, column, idx) => {
      acc[column.field] = binary[idx] || '0';
      return acc;
    }, {} as { [key: string]: string });
  }

  const handleStatusChange = (id: GridRowId, newStatus: string) => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === id ? { ...row, S: newStatus } : row))
    );
  };

  columns.push({
    field: 'S',
    headerName: 'S',
    flex: 1,
    headerClassName: 'GridColumnHeader',
    headerAlign: 'center',
    renderCell: (params) => (
      <Select
        value={params.value}
        onChange={(e) => handleStatusChange(params.id, e.target.value)}
        className="cellSelector"
        fullWidth
        MenuProps={{
          classes: { paper: 'menu' },
        }}
      >
        <MenuItem key={0} value={'0'} className="menuItem">
          {'0'}
        </MenuItem>
        <MenuItem key={1} value={'1'} className="menuItem">
          {'1'}
        </MenuItem>
      </Select>
    ),
  });

  const [rows, setRows] = useState<Row[]>(
    output.map((result, index) => ({
      id: index,
      ...columnsForTheRows(index),
      S: result.toString(),
    }))
  );

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
        className="InputTable"
      />
    </div>
  );
}
