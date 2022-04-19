import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Main from '../components/Main';
import Project from "../Pages/Project";
import './PageStyle.css';


function createData(name) {
  return { name };
}

const rows = [
  createData('Id'),
  createData('User'),
  createData('Title'),
  createData('Created on'),
];

export default function DenseTable() {
  return (
    <>
     <Main />
      <div className='project'>
      <Project />
      </div>
      <div className='tab'>
    <TableContainer component={Paper} width="15%">
      <Table  sx={{ minWidth: 0}}  align="center"  size="large"  aria-label="simple table">
      
     
      
        <TableHead width="100%">
          <TableRow>
            <TableCell>API</TableCell>
          </TableRow>
        </TableHead>
        <TableBody align="center">
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0} }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>  
  );
}