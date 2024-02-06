'use client'
import React, { useState } from 'react';

const PopupButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState(0);

  const handleButtonClick = () => {
    // Show/hide the popup
    setShowPopup(!showPopup);
  };

  const handleCalculate = () => {
    const result = parseInt(input1) * parseInt(input2) * 45;
    setResult(result);
  };

  return (
  <div className="fixed bottom-0 right-0 m-4">
    <button onClick={handleButtonClick} className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">
      See your Reach
    </button>

    {showPopup && (
      <div className="fixed bottom-0 right-0 p-4 bg-white border border-gray-300 shadow rounded-md">
        <p className="text-gray-500">No. of vehicles</p>   
        <input
          type="text"
          placeholder="No. of vehicles"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          className="mb-2 p-2 border border-gray-300 rounded w-full"
        />
        <p className="text-gray-500">No. of Days for advertisement</p>   
        <input
          type="text"
          placeholder="Days"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          className="mb-2 p-2 border border-gray-300 rounded w-full"
        />
        <button onClick={handleCalculate} className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark w-full">
          Calculate
        </button>
        {result !== null && (
          <p className="mt-4 text-center text=lg mb-10 font-semibold">
            Your ad will travel approximately {result} Kilometres!!!
          </p>
        )}
        <button onClick={() => setShowPopup(false)} className="absolute bottom-0 right-0 m-2 text-gray-500">
          Close
        </button>
      </div>
    )}
  </div>
);
};

export default PopupButton;
