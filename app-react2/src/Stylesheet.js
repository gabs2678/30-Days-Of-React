import React from "react";
import './style2.css';

function Stylesheet(props) {
    let cambio = props.principal ? 'principal' : ''
  return (
    <div>
        <h2 className={`${cambio} font-xl`}>Hola</h2>
    </div>
  )
}

export default Stylesheet