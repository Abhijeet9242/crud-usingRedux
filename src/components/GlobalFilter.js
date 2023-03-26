import React from 'react'

const GlobalFilter = ({filter,setFilter}) => {
  return (
    <input value={filter} onChange={(e)=>setFilter(e.target.value)} />
  )
}

export default GlobalFilter