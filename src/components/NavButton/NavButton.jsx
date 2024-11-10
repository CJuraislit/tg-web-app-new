import React from 'react';
import "./NavButton.css"

const NavButton = ({name}) => {


  return (
    <div>
      <button className={"nav_button"}>{name}</button>
    </div>
  );
};

export default NavButton;
