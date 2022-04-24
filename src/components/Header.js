import React from "react";


const Header=(props)=>{

  return(
    <React.Fragment>
      <h1>{props.name}</h1>
      {props.children}
    </React.Fragment>
    
  );
}

export default Header;
