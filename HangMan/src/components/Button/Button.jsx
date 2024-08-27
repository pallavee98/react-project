import { useState } from "react";

// function customeStyle(styleType){
//     const primaryButtonStyling = "bg-blue-500 border-blue-700 hover-bg-700 hover:border-blue-900";
//     const secondaryButtonStyling ="bg-gray-500 border-gray-700 hover:bg-gray-700 hover:border-gray-900"

//     if(styleType ==="primary"){
//         return primaryButtonStyling;
//     }else if(styleType === "secondary"){
//         return secondaryButtonStyling;
//     }
// }

import React from "react";

function Button({ text, type ='button', onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {text}
    </button>
  );
}

export default Button;
