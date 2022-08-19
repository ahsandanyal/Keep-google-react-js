import React from 'react'
import "../Style.css";
import DeleteIcon from '@mui/icons-material/Delete';
import Delete from '@mui/icons-material/Delete';

function Note({title, content, onDelete, id}) {

  return (
    <div className='note' >
        <h1>{title}</h1>
        <p>{content}</p>
        <button onClick={()=>onDelete(id)}><Delete></Delete></button>
    </div>
  )
}

export default Note;