import React from 'react';
import "./NavButtonContainer.css"
import NavButton from "../NavButton/NavButton";

const NavButtonContainer = () => {
  return (
    <div className={"nav_container"}>
      <NavButton name={"Home"}/>
      <NavButton name={"Friends"}/>
      <NavButton name={"Leaders"}/>
      <NavButton name={"Chanel"}/>
    </div>
  );
};

export default NavButtonContainer;
