import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <>
      <style>
        {`
          .button {
            align-items: center;
            justify-content: center;
            font-family: 'Russo One', sans-serif;
            font-size: 20px;
            letter-spacing: 3px;
            color: #1B9FDC  ;
            width: 200px;
            height: 50px;
            background: ;
            position: relative;
            display: flex;
            cursor: pointer;
            border: none;
          }

          .button:hover {
            transform: scale(1.05);
            background: #ffffff;
          }

          .button:before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 0;
            height: 0;
            border-top: 2px solid white;
            border-right: 2px solid white;
            animation: border-top-right 2s infinite alternate;
          }

          @keyframes border-top-right {
            0% { width: 0px; height: 0px; }
            25% { width: 200px; height: 0px; }
            50% { width: 200px; height: 48px; }
            100% { width: 200px; height: 48px; }
          }

          .button:after {
            content: "";
            position: absolute;
            right: 0;
            bottom: 0;
            width: 0;
            height: 0;
            border-bottom: 2px solid white;
            border-left: 2px solid white;
            animation: border-bottom-left 2s infinite alternate;
          }

          @keyframes border-bottom-left {
            0% { width: 0px; height: 0px; opacity: 0; }
            50% { width: 0px; height: 0px; opacity: 0; }
            50.1% { width: 0px; height: 0px; opacity: 1; }
            75% { width: 200px; height: 0px; opacity: 1; }
            100% { width: 200px; height: 48px; opacity: 1; }
          }

          .button-border-top-right {
            position: absolute;
            left: 0;
            top: 0;
            width: 0;
            height: 0;
            border-top: 2px solid white;
            border-right: 2px solid white;
            animation: border-top-right 2s infinite alternate;
          }

          .button-border-bottom-left {
            position: absolute;
            right: 0;
            bottom: 0;
            width: 0;
            height: 0;
            border-bottom: 2px solid white;
            border-left: 2px solid white;
            animation: border-bottom-left 2s infinite alternate;
          }
        `}
      </style>

      <button onClick={onClick} className="button relative">
        {children}
        <div className="button-border-top-right" />
        <div className="button-border-bottom-left" />
      </button>
    </>
  );
};

export default Button;
