
import React from "react";

function Keypad() {
  
  const handleChange = () => {
    console.log("Entering password...");
  };

  return (
    <div>
      <input 
        type="password" 
        onChange={handleChange} 
        placeholder="Enter password" 
        aria-label="Password input"
      />
    </div>
  );
}

export default Keypad;
