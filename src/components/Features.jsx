import React from 'react';
import './Features.css' 
import About  from './About';
function Features() {
  return (

  <div className="w-full text-white py-12 mb-6">
  <h2 className="text-center text-3xl font-bold mb-10">Our Features</h2>

  <div className="px-4 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-3">
      
    
      <div className="p-6 bg-gray-800 rounded-lg text-center row-span-2">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-500 h-12 w-12 rounded-full flex items-center justify-center">
            <span className="text-xl">⚙️</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">Trade Optimizer</h3>
        <p className="text-gray-400">
          Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity.
        </p>
      </div>

      {/* Market Insight Card */}
      <div className="p-6 bg-gray-800 rounded-lg text-center col-span-2">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-500 h-12 w-12 rounded-full flex items-center justify-center">
            <span className="text-xl">📈</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">Market Insight</h3>
        <p className="text-gray-400">
          Stay ahead of the market. Get real-time updates on market trends, track top traders' movements, and spot signals from key influencers.
        </p>
      </div>

      {/* Risk Guard Card */}
      <div className="p-6 bg-gray-800 rounded-lg text-center row-span-2">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-500 h-12 w-12 rounded-full flex items-center justify-center">
            <span className="text-xl">🛡️</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">Risk Guard</h3>
        <p className="text-gray-400">
          Get alerts on market swings and potential risks before they impact your portfolio. This agent helps you navigate volatility and stay prepared for anything.
        </p>
      </div>

      {/* Portfolio Sync Card */}
      <div className="p-6 bg-gray-800 rounded-lg text-center col-span-2 mb-3">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-500 h-12 w-12 rounded-full flex items-center justify-center">
            <span className="text-xl"></span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2"></h3>
        <p className="text-gray-400">
          
        </p>
      </div>
      </div>
      {/* finished */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 mt-2 gap-3">

   
      <div className="p-6 bg-gray-800 rounded-lg text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-500 h-12 w-12 rounded-full flex items-center justify-center">
            <span className="text-xl">🔄</span>
          </div>
          
        </div>
        <h3 className="text-xl font-bold mb-2">Portfolio Sync</h3>
        <p className="text-gray-400">
          Easily manage your portfolio. You'll always know what you own, how it's performing, and where it's headed.
        </p>
      </div>
    
      {/* gfbgfbgfbgm */}
      {/* Opportunity Scout Card */}
      <div className="p-6 bg-gray-800 rounded-lg text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-500 h-12 w-12 rounded-full flex items-center justify-center">
            <span className="text-xl">🔍</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">Opportunity Scout</h3>
        <p className="text-gray-400">
          Find exciting new projects, events, and tokens that others might be missing. Identify promising opportunities early, so you never miss out on the next big thing.
        </p>
      </div>

      </div>
      
  </div>
  <About />
</div>


  );
}

export default Features;
