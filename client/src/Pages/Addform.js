import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './form.css';
import MyForm from './MyForm';
import { spacing } from '@mui/system';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
export default function FullWidthTextField() {
       let navigate = useNavigate();
       var [myvalue, setmyValue] = MyForm({ title: "", createdon: "" })
       const AddProject = () => {
           console.log(myvalue)
           axios.post("http://localhost:9000/api/v1/projects/createproject", myvalue).then(
               (res) => {
                   alert("Successfully created project")
                   console.log("in axios post" + res.data)

               }
           )
      }
  return (
    
    <Box
    
      sx={{
        width: 500,
        maxWidth: '50%',
        marginLeft: '30%',
        marginTop: '7%',
        padding: '10px',
        spacing: '2px',
      }}
    >
      <div className='head'>
      <h1>Add Project</h1>
      </div>
      <div className='title'>
      <TextField fullWidth label="Title" id="fullWidth" />
      </div>
      <div className='createdon'>
      <TextField fullWidth label="Created on" type="date" id="fullWidth" />
      </div>
      <Button variant="contained" onClick={AddProject}>Submit</Button>
       </Box>

)
}