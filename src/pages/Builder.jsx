import React from "react";
import {Link} from 'react-router-dom'


function Builder(){
  const = ({ isOpen, ToggleSidebar }) => {
    return (
      <div className= {'sidebar ${isOpen ? 'open' : ''}'}>
        <button className="close-btn" onClick={ToggleSidebar}>&times;</button>
        <nav>
          <li><link to='/'>User Account intergation</link></li>
          <li><link to='/'>Validation & Help</link></li>
          <li><link to='/'>Export & Share</link></li>
        </nav>
    </div>
    );
  }


}


export default Builder;
