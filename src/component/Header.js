import React from 'react';
import "../Style.css";
import notebook from '../assessts/notebook.png';

function Header() {
    
    // const logo = (
    //      <img src='https://www.flaticon.com/free-icons/notebook" title="notebook icons">Notebook icons created by mikan933 - Flaticon' alt='logo'></img>
    // )
  return (
    <div className="header">
     <img src={notebook}></img>
      <h1>Keep</h1>
    </div>
  )
}

export default Header;