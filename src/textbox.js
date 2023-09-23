import React, { useState } from "react";

function TextBoxInput() {
  // Create a state variable to store the input value
  const [inputValue, setInputValue] = useState("");

  // Event handler to update the state when the input changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <label htmlFor="textbox">Text Input: </label>
      <input
        type="text"
        id="textbox"
        value={inputValue}
        onChange={handleInputChange}
      />
      <p>You entered: {inputValue}</p>
    </div>
  );
}

export default TextBoxInput;
