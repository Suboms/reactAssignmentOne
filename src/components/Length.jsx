import React, { useState } from "react";
import InputField from "./Input";
import TextLength from "./TextLength";

const CheckLength = () => {
  const [length, setLength] = useState(0);
  const handleChange = (e) => {
    setLength(e.target.value.length);
  };
  
  return (
    <>
      <InputField
        inputid="text-input"
        inputname="text-input"
        label="Text Input"
        handleChange={handleChange}
      />
      <h2>The length is {length}</h2>

      <TextLength theLength={length}/>
    </>
  );
};
export default CheckLength;
