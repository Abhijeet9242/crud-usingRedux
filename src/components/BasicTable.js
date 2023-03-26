import React, { useEffect, useMemo, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import "./BasicTable.css";
import {COLUMNS} from "./columns";
import {useTable} from "react-table";
import { addUser, fetchUsers } from '../redux/Actions';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

//modal
import styled from 'styled-components';
import  TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';


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
 

export const BasicTable = () => {
   
    const navigate = useNavigate()
    const users = useSelector((state)=>state.userData)
    const dispatch  = useDispatch()
   

    //add user modal state for open and close
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    //add user modal state for getting data from modal------------
    // const[id,setId] = useState("")
    let id ;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(()=>{
        dispatch(fetchUsers()) 
     },[])

    const handleAddUser = (e)=>{
        e.preventDefault()
        id = users.length+1
        const payload = {
            id,
            name,
            username:"",
            email,
            address:{},
            phone:"",
            website:"",
            company:{}
        }

        dispatch(addUser(payload,users))
        setOpen(false)
        
    }

//below are code for creating react table
const columns = useMemo(()=>{
    return COLUMNS
},[])

// const data = useMemo(()=>{
//     return users
// },[])

const tableInstance = useTable({
    columns:columns,
    data:users
})

const{getTableProps,getTableBodyProps,headerGroups,rows,prepareRow,footerGroups} = tableInstance






  return (
    <>
    <Navbar/>
    
    <div className='tablediv'>
        <div className='searchdiv'>
            <div><button className='btn' onClick={handleOpen}>ADD USER</button></div>
            <div className='search'>
                <label>Search : </label>
                <input type="text" />
            </div>
        </div>
    <table {...getTableProps()}>
        <thead>
            {
                headerGroups.map(headerGroup=>(
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map((column)=>(
                                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                            ))
                        }
                       
                    </tr>
                ))
            }
           
        </thead>
        <tbody {...getTableBodyProps()}>
            {
                rows.map((row)=>{
                    prepareRow(row)
                    return (
                      <>
                      
                        <tr {...row.getRowProps()}>
                          
                            {
                                row.cells.map(cell=>{
                                    return (
                                        <td 
                                       {...cell.getCellProps()}>{cell.render('Cell')}
                                        </td>
                                        
                                    )
                                    
                                })
                                
                            }
                            
                        </tr>
                       
                        </>
                    )
                        })
            }
           
           
        </tbody>
       
    </table>
    <div className='paginationdiv'>
        <div className='pagination'>
            <div>page 1 of 2</div>
            <div>prev and next</div>
        </div>
        
    </div>
</div>


<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <StyledWrapper>
        <StyledText>ADD USER</StyledText>
         {/* <StyledTextField
            variant="outlined"
            label="Enter id"
            type="email"
            // value={email}
            // onChange={(e)=>setId(e.target.value)}
            required
            fullWidth
            size="small"
            autoFocus
          /> */}
          <StyledTextField
            variant="outlined"
            label="Enter name"
            type="text"
            // value={email}
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
            // value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
            fullWidth
            size="small"
            autoFocus
          />

          <StyledButton onClick={handleAddUser}>ADD</StyledButton>
          </StyledWrapper>
        </Box>
      </Modal>

<Footer/>

</>
  )
}






