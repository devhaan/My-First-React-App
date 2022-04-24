import React from 'react';
import './styles.css';


 const Styles=(props) => {
    let className = props.isvalue ? 'demo':'demo1';
    console.log("props.isvalue ",props.isvalue);

  return (
      <>
            <h1 className={`${className} demo2`}>Hi folks</h1>
    </>
  )
}
 

export default Styles;