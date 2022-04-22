// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import Main from '../components/Main';
// import Project from "../Pages/Project";
// import './PageStyle.css';


// function createData(name) {
//   return { name };
// }

// const rows = [
//   createData('Id'),
//   createData('User'),
//   createData('Title'),
//   createData('Created on'),
// ];

// export default function DenseTable() {
//   return (
//     <>
//      <Main />
//       <div className='project'>
//       <Project />
//       </div>
//       <div className='tab'>
//     <TableContainer component={Paper} width="15%">
//       <Table  sx={{ minWidth: 0}}  align="center"  size="large"  aria-label="simple table">
      
     
      
//         <TableHead width="100%">
//           <TableRow>
//             <TableCell>API</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody align="center">
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0} }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
              
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//     </div>
//     </>  
//   );
// }


import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import './PageStyle.css';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'api', headerName: 'API', width: 130 },
];

const rows = [
  { id: 1, api:'ID' },
  { id: 2, api:'User' },
  { id: 3, api:'Title' },
  { id: 4, api:'Created On'},
  
];

export default function DataTable() {
  return (
    
    <div className='list' style={{ height: 350, width: '80%' }}>
      
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={4}
        rowsPerPageOptions={[4]}
        checkboxSelection
      />
    </div>
  );
}












