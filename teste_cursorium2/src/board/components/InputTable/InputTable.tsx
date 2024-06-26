import "./styles/InputTable.css"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useState } from 'react';

type Row = {
  id: number;
  S: string;
} & {
  [key: string]: string | number;
};

export default function DataTable() {

  var initialLetters = ['A','B','C','D','E'];
  var initialOutput = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  const [letters,setLetters] = useState(initialLetters);
  const [output,setOutput] = useState(initialOutput);

  if((Math.pow(2,letters.length))!== output.length){
    throw new Error(`Erro, tamanho do vetor de saída (${output.length}) não bate com quantidade de variáveis (${Math.pow(2,letters.length)})`);
  }

  const columns: GridColDef[] = letters.map((letter) => ({
    field: letter,
    headerName: letter,
    flex: 1,
    editable: false,
    headerClassName:'GridColumnHeader',
    headerAlign:'center', 
  }));

  function decimalToBinary(N: number) {
    return (N >>> 0).toString(2).padStart(letters.length, '0');;
  }
  
  function columnsForTheRows(index:number){
    var binary = decimalToBinary(index);

    const columnValues = columns.reduce((acc, column, idx) => {
      acc[column.field] = binary[idx] || '0';
      return acc;
    }, {} as { [key: string]: string });

    return columnValues;
  }

  columns.push({ 
    field: 'S', 
    headerName: 'S', 
    flex: 1, 
    editable: true, 
    headerClassName:'GridColumnHeader',
    headerAlign:'center' 
  });  

  const [rows, setRows] = useState<Row[]>(
    output.map((result, index) => ({
      id: index,
      ...columnsForTheRows(index),
      S: result.toString(), // Ensure 'S' field is a string for consistency
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
        className='InputTable'
        />
    </div>
  );
}
