import './App.css';
import React,{useState} from 'react';
import Header from './component/Header';
import Count from './component/Count';
import Note from './component/Note';
import CreateArea from './component/CreateArea';
import Footer from './component/Footer';

function App(props) {
  const[notes, setNotes] = useState([]);

  function addNote(newNote){
  setNotes((preValue)=>{
     return[...preValue, newNote];
  });
  }

  function deleteNotes(id){
     setNotes((preValue)=>{
      return[...preValue.filter((note,index)=> index !== id )];
     })
  }

  return (
    <div className="App">
     <Header></Header>
     <Count count={notes.length === 0 ? "Empty" : `Showing ${notes.length} Notes in Database`}/>
     <CreateArea onAdd={addNote} />
      {
        notes.map((note, index)=>(
          <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              onDelete={deleteNotes}/>
        ))}
      
      
     <Footer></Footer>
    </div>
  );
}

export default App;
