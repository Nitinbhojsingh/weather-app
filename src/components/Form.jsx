// Form.js
import React from "react";

function Form({ city, setCity, handleSubmit }) {
  return (
    <>
      <div class="max-w-md mx-auto">
        <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
          <div class="grid place-items-center h-full w-12 text-gray-300 ">
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter city name"
              className=" outline-none"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
