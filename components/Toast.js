import React from "react";

export const Toast = ({ msg, handleShow, bgColor }) => {
  return (
    <div>
      <div
        className={`flex items-center justify-between max-w-sm ml-4 p-2 border rounded-md shadow-sm shadow-white fixed top-18 right-5 z-10 ${bgColor}`}
      >
        <div className="flex items-center">
          <h1 className="ml-3 text-xs font-nova font-bold text-white">
            {msg.title}
          </h1>
          <p className="ml-3 text-xs font-nova font-bold text-white">
            {msg.msg}
          </p>
        </div>
        <span className="inline-flex items-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-4 ml-2 text-white font-extrabold"
            fill="none"
            viewBox="0 0 26 26"
            stroke="currentColor"
            onClick={handleShow}
          >
            <path
              l="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};
