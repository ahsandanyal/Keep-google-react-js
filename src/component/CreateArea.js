import React,{useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import "../Style.css";

function CreateArea({onAdd}) {
    const[isExpanded, setExpanded] = useState(false);
    const[note, setNote] = useState(
        { 
        title: "",
        content: ""
        }
    );

    function handleChange(e){
        const{name, value} = e.target;
        setNote((preValue)=>{
            return{
                ...preValue,
                [name] : value,

            };
        })
    }

    function handleExapanded(){
        setExpanded(true);
    }

    function submitButton(e){
        onAdd(note);
        setNote(
            {
                title:"",
                content:""
            });
            e.preventDefault();
    }

  return (
    <div>
     <form>
        {
            isExpanded && (
            <input type="text" value={note.title} onChange={handleChange} name="title" placeholder='Enter Title'></input>
            )
        }
        <p>
            <textarea name='content'
             value={note.content} 
             onClick={handleExapanded}
              onChange={handleChange} 
              rows={isExpanded ? 3 : 1}
            placeholder="Enter Description"></textarea>
             </p>
            <button onClick={submitButton}>
              <AddIcon/>
            </button>
        </form>

    </div>
  )
}

export default CreateArea;
