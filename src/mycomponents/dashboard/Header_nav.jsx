import React from "react";
import ".././style.css";
import { Dropdown } from "react-bootstrap";

export function Header_nav({setshownav}) {
  return (
    <div className="header_nav" >
      <div className="hamburger" onClick={()=>setshownav((state)=>!state)}>
        <span className="hn"></span>
        <span className="hn"></span>
        <span className="hn"></span>
      </div>
   <Dropdown>
    <Dropdown.Toggle  id="dropdown-custom-components">
    <span className="user"><img src="./images/user.png" alt="" /></span>
        <span className="use_name">Amelia warn</span>
    </Dropdown.Toggle>
    <Dropdown.Menu >
      <Dropdown.Item eventKey="1">Profile</Dropdown.Item>
      <Dropdown.Item eventKey="2">Logout</Dropdown.Item>
     
      
    </Dropdown.Menu>
  </Dropdown>

    </div>
  );
}
