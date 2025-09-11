import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="bg-white rounded-3xl shadow-xl p-10 w-80 text-center">
        <h1 className="text-4xl font-bold mb-5 text-gray-800">Counter</h1>
        <p className="text-6xl font-extrabold mb-8 text-purple-500">{count}</p>
        <div className="flex justify-between">
          <button
            onClick={decrement}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-xl transition duration-300"
          >
            -
          </button>
          <button
            onClick={reset}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-xl transition duration-300"
          >
            Reset
          </button>
          <button
            onClick={increment}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-xl transition duration-300"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
