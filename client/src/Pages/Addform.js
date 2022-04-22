
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './form.css';
import MyForm from './Dbform';
import { spacing } from '@mui/system';
import Button from '@mui/material/Button';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
export default function FullWidthTextField() {

       let navigate = useNavigate();
       let [formValues, setFormValues] = useState({title:"",createdOn:""});
       const addProject = () => {
           console.log(formValues)
           axios.post("http://localhost:9000/api/v1/projects/createproject", formValues).then(
               (res) => {
                   alert("Successfully created project")
                   console.log("in axios post" + res.data)

               }
           )
      }
      const handleChange = (event) =>{
         const { name, value } = event.target; 
        setFormValues({ ...formValues, [name]: value }); 
      }
  return (
    <div className='form'>
    
    <Box
    
      sx={{
        width: '100%',
        maxWidth: '150%',
        marginLeft: '1%',
        marginTop: '0%',
        padding: '50px',
        spacing: '2px',
      }}
    >
      <div className='head'>
      <h1>Add Project</h1>
      </div>
      <div className='title'>
      <TextField fullWidth label="Title" type="text"  value={formValues.title} onChange={handleChange} />
      </div>
      <div className='createdOn'>
      <TextField fullWidth label="createdOn" type="date" id="fullWidth"  value={formValues.createdOn} onChange={handleChange} />
      </div>
      <Button variant="contained" onClick={addProject}>Submit</Button>
     
       </Box>
       </div>

)
}
 



































//        const addProject = () => {
//            console.log(myvalue)
//            axios.post("http://localhost:9000/api/v1/projects/createproject", myvalue).then(
//                (res) => {
//                    alert("Successfully created project")
//                    console.log("in axios post" + res.data)

//                }
//            )
//       }
//   return (
//     <div className='form'>
    
//     <Box
    
//       sx={{
//         width: '100%',
//         maxWidth: '150%',
//         marginLeft: '1%',
//         marginTop: '0%',
//         padding: '50px',
//         spacing: '2px',
//       }}
//     >
//       <div className='head'>
//       <h1>Add Project</h1>
//       </div>
//       <div className='title'>
//       <TextField fullWidth label="Title" type="text"  value={myvalue.title} onChange={setmyValue} />
//       </div>
//       <div className='createdOn'>
//       <TextField fullWidth label="createdOn" type="date" id="fullWidth" value={myvalue.createdOn} onChange={setmyValue} />
//       </div>
//       <Button variant="contained" onClick={addProject}>Submit</Button>
     
//        </Box>
//        </div>

// )
// }
 


