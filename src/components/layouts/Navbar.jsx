import React from "react";

function Navbar() {
  return (
    <nav class="flex justify-between items-center rounded-md shadow-red-50">
    <a
     href="https://flowbite.com/"
     class="flex space-x-3 rtl:space-x-reverse"
   >
     <img
     src="https://res.cloudinary.com/learning-platform/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fthematrixlabs.com%2Fstatic%2Fmedia%2Flogo.43997152199e324338d986e7ad4b1b2f.svg"

       class="h-8"
       alt="Flowbite Logo"
     />
     <span class="self-start text-4xl font-bold text-white">
       EthAi
     </span>
   </a>
     <div className="bg-transparent-300/100 hidden md:flex pt-3 p-36 py-3 rounded-xl border-3 border-stroke-weight/1">
     <ul class="hidden md:flex space-x-6">  
         <li><a class="text-base font-bold bg-red-20 text-blue-600/100" href="/features">Features</a></li>
         <li><a class="text-base font-bold   text-blue-600/100" href="#">Why us? </a></li>
         <li><a class="text-base font-bold   text-blue-600/100" href="/tokenomics">Tokenomics</a></li>
         <li><a class="text-base font-bold   text-blue-600/100" href="#">Roadmap</a></li>
     </ul>
     </div>
     <div class="flex md:order-2 hidden md:flex space-2 md:space-x-0 rtl:space-x-reverse">
       <h5 className="text-white pr-4">Login</h5>
     <button
       type="button"
       class="text-black bg-sky-300/100 font  
       -bold focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
     >
       WhitePaper
     </button>
     </div>
     <button class="md:hidden mobile-icon">
         <svg class="h-10 w-10 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>
     </button>
 </nav>
  );
}

export default Navbar;
