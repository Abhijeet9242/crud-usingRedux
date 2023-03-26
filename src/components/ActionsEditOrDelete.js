import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../redux/Actions';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const ActionsEditOrDelete = (props) => {

  

  const dispatch = useDispatch()
//  console.log(props.props)
 const {row} = props.props

  const[cellvalue,setCellValue] = useState("")

  const handleDelete = (props) => {
    // console.log(props.original.id)
    dispatch(deleteUser(props.original.id))
    
  }

  


  

  return (
    <>
    <div>
      <button onClick={()=>handleDelete(row)}><DeleteIcon /></button>
      <button ><EditIcon /></button>
    </div>
    </>
  )
}

export default ActionsEditOrDelete