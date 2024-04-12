import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { colors } from '@mui/material';
import { pink } from '@mui/material/colors';

export default function CustomizedTables() {
    const[row,setRow] = React.useState([])

    React.useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        // .then((data)=>console.log(data,"data"))
        .then((data)=>setRow(data))
    },[])

    console.log(row,"row");
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Website</TableCell>
            <TableCell align="right">Phone</TableCell>
            {/* <TableCell align="right">Company</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {row.map((row) => (
            <TableRow hover key={row.arr} sx={{'&:last-child td , &:last-child th':{border:0}}}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.website}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              {/* <TableCell align="right">
                {row.company && Object.entries(row.company).map(([key, value]) => (
                    <TableRow key={key}>
                        <TableCell align="right">{value}</TableCell>         
                    </TableRow>
                ))}
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}