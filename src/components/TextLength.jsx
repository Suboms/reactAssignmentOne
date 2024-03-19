/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const TextLength = (props) => {
  const theLength = props.theLength;
  if(theLength === 0){
    return;
  }
  else if (theLength <= 20){
    return(
      <>
      <p>Text to short</p>
      </>
    )
  } else{
    return(
      <>
      <p>Text to long</p>
      </>
    )
  }
};
export default TextLength;
