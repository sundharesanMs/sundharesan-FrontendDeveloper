import React from "react";
import "./Tokenomics.css";

export default function Tokenomics() {
  return (
    <div className="p-6">
      <div>
        <h1 className="text-white text-center text-4xl font-bold mb-6">Tokenomics</h1>
      </div>

      <div className="flex flex-col md:flex-row justify-content-center items-center  ap-3 space-x-0 md:space-x-6">
        <div className="mb-6 md:mb-0">
          <img
            className="max-w-lg"
            src="https://res.cloudinary.com/dkq52xg9i/image/upload/v1729064867/Donut_ysnl8a.png"
            alt="Donut Tokenomics"
          />
        </div>
        {/* text comt=ntaier */}
        <div>

      
        <div className="text-container p-3 rounded-lg mb-3 shadow-md bg-gray-800">
          <h2 className="text-white text-2xl font-semibold mb-4">Details</h2>
          <ul className="text-white space-y-2 p-4">
            <li className="text-lg font-mono"><strong>Name:</strong> EthAi</li>
            <li className="text-lg font-mono"><strong>Token Name:</strong> $EthAi</li>
            <li className="text-lg"><strong>Token Standard:</strong> ERC20</li>
            <li className="text-lg"><strong>Blockchain:</strong> Ethereum</li>
            <li className="text-lg"><strong>Total Supply:</strong> 100 Million</li>
            <li className="text-lg"><strong>Tax:</strong> 5%/5%</li>
            
          </ul>
          </div>
          <div className="text-container mx-w-30  p-3 rounded-lg shadow-md bg-gray-800">
        <li className="text-lg text-white"><strong>Team:</strong> 35%</li>
            <li className="text-lg text-white"><strong>Marketing:</strong> 5%</li>
            <li className="text-lg text-white"><strong>Liquidity Pool:</strong> 90%</li>
        </div>
        </div>
       
      </div>
      
    </div>
  );
}
