/* eslint-disable react/prop-types */
import React from "react";

const InputField = (props) => {
  return (
    <>
      <div className="input-container">
        <label htmlFor={props.inputid}>{props.label}</label>
        <input
          type="text"
          name={props.inputname}
          id={props.inputid}
          onChange={props.handleChange}
        />
      </div>
    </>
  );
};
export default InputField;
