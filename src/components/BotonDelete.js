import React from "react";
import '../styles/BotonClear.css';

function BotonDelete(props) {
  return (
    <div className='boton-clear' onClick={props.deleteInput}>
      {props.children}
    </div>
  );

}

export default BotonDelete;