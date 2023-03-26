import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser, updateUser } from '../redux/Actions';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import styled from 'styled-components';
import  TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

//modal styling
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 3,
};

//modal internal styling
const StyledWrapper = styled.div`

`;
  const StyledText = styled.h3`
  text-align:center;
  color:#FFFFFF;
  background-Color:#000000;
  padding:7px 0px;
`;
const StyledTextField = styled(TextField)`
  margin-bottom: 10px;
`;
const StyledButton = styled.button`
  display:flex;
  padding:8px 40px;
  border-radius:10px;
  background-Color:#146C94;
  cursor:pointer;
  margin:auto;
  color:#FFFFFF;
  margin-top:20px;
`;



const ActionsEditOrDelete = (props) => {
//  console.log(props.props)

//add user modal state for open and close
const [open, setOpen] = useState(false);
const handleClose = () => setOpen(false);

//add user modal state for getting data from modal------------
    const[id,setId] = useState("")
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    

const {row} = props.props
const dispatch = useDispatch()

const handleDelete = (row) => {
  // console.log(props.original.id)
  dispatch(deleteUser(row.original.id))
}


const handleOpen = (row) => {
  // console.log(row.original.id,"mm")
  setId(row.original.id)
  setOpen(true)

}

const handleEditUser = (e) =>{
  e.preventDefault()
  // console.log(id,name,email)
  const payload = {
    id,
    name,
    email,
  }
  // console.log(payload)
  dispatch(updateUser(id,payload))
  setOpen(false)
}
 

  // const[cellvalue,setCellValue] = useState("")

  

  

  


  

  return (
    <>
    <div>
      <button onClick={()=>handleDelete(row)}><DeleteIcon /></button>
      <button onClick={()=>handleOpen(row)} ><EditIcon /></button>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <StyledWrapper>
        <StyledText>EDIT USER</StyledText>
         {/* <StyledTextField
            variant="outlined"
            label="Enter id"
            type="text"
            // value={email}
            onChange={(e)=>setId(e.target.value)}
            required
            fullWidth
            size="small"
            autoFocus
            
           
          /> */}
          <StyledTextField
            variant="outlined"
            label="Enter name"
            type="text"
            // value={name}
            onChange={(e)=>setName(e.target.value)}
            required
            fullWidth
            size="small"
            autoFocus
           
          />
          <StyledTextField
            variant="outlined"
            label="Enter email"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
            fullWidth
            size="small"
            autoFocus
            
          />

          <StyledButton onClick={handleEditUser}>EDIT</StyledButton>
          </StyledWrapper>
        </Box>
      </Modal>

    </div>
    </>
  )
}

export default ActionsEditOrDelete