// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Import the FontAwesomeIcon component
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';    

export default function Roadmap() {
  return (
    <div className='flex flex-col justify-center items-center mt-12 px-4 sm:px-6'>
  
      <div className='mb-8'>
        <h1 className='text-white font-bold text-3xl font-sans text-center'>Roadmap</h1>
      </div>
      

      <button className='text-black mb-3'>Phase 1</button>
     
      <div className='flex flex-col space-y-4 '>
        {/* Phase 1 */}
        <div className='flex items-center'>
          <FontAwesomeIcon 
            icon={faCheck} 
            size="2x"           
            style={{ color: 'green' }} 
          />
          <p className='ml-4 text-white text-base sm:text-lg'>Launch of EthAi: officially</p> 
        </div>
        
        {/* Phase 2 */}
        <div className='flex items-center'>
          <FontAwesomeIcon 
            icon={faCheck} 
            size="2x" 
            style={{ color: 'green' }}
          />
          <p className='ml-4 text-white text-base sm:text-lg'>Development of core AI agents</p>
        </div>

        {/* Other Roadmap Items */}
        <div className='flex items-center'>
          <FontAwesomeIcon 
            icon={faCheck} 
            size="2x" 
            style={{ color: 'green' }}
          />
          <p className='ml-4 text-white text-base sm:text-lg'>Strategic partnerships</p>
        </div>

        <div className='flex items-center'>
          <FontAwesomeIcon 
            icon={faCheck} 
            size="2x" 
            style={{ color: 'green' }}
          />
          <p className='ml-4 text-white text-base sm:text-lg'>User Interface optimization</p>
        </div>
      </div>

      {/* Phase 2 */}
      <button className='text-black px-4 py-2 rounded-lg m-4     bg-white'>Phase 2</button>
      
      <div className='flex flex-col space-y-4'>
        <div className='flex items-center'>
          <FontAwesomeIcon 
            icon={faCheck} 
            size="2x"           
            style={{ color: 'green' }} 
          />
          <p className='ml-4 text-white text-base sm:text-lg'>Bigger Insights</p> 
        </div>
        
        <div className='flex items-center'>
          <FontAwesomeIcon 
            icon={faCheck} 
            size="2x" 
            style={{ color: 'green' }}
          />
          <p className='ml-4 text-white text-base sm:text-lg'>Introduction of advanced AI agents</p>
        </div>
      </div>

      {/* Phase 3 */}
      <button className='text-black px-4 py-2 rounded-lg m-4     bg-white'>Phase 3</button>
      
      <div className='flex flex-col space-y-4'>
        <div className='flex items-center'>
          <FontAwesomeIcon 
            icon={faCheck} 
            size="2x"           
            style={{ color: 'green' }} 
          />
          <p className='ml-4 text-white text-base sm:text-lg'>Official launch of EthAi</p> 
        </div>
        
        <div className='flex items-center'>
          <FontAwesomeIcon 
            icon={faCheck} 
            size="2x" 
            style={{ color: 'green' }}
          />
          <p className='ml-4 text-white text-base sm:text-lg'>Development of core AI agents</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className='faq-section w-full mt-10'>
        <h2 className='text-3xl text-white font-bold mb-6 text-center'>Frequently Asked Questions</h2>

        <div className='space-y-4'>
          {/* Question 1 */}
          <div className='bg-gray-700 p-4 rounded-lg'>
            <div className='flex justify-between items-center'>
              <h3 className='text-white text-base sm:text-lg font-semibold'>What is EthAi?</h3>
              <FontAwesomeIcon
                icon={faPlus}  // Plus icon
                style={{ color: 'white', fontSize: '1.5rem' }}
              />
            </div>
          </div>

          {/* Question 2 */}
          <div className='bg-gray-700 p-4 rounded-lg'>
            <div className='flex justify-between items-center'>
              <h3 className='text-white text-base sm:text-lg font-semibold'>Who can use EthAi?</h3>
              <FontAwesomeIcon
                icon={faPlus}  // Plus icon
                style={{ color: 'white', fontSize: '1.5rem' }}
              />
            </div>
          </div>

          {/* Question 3 */}
          <div className='bg-gray-700 p-4 rounded-lg'>
            <div className='flex justify-between items-center'>
              <h3 className='text-white text-base sm:text-lg font-semibold'>What are the core AI agents?</h3>
              <FontAwesomeIcon
                icon={faPlus}  // Plus icon
                style={{ color: 'white', fontSize: '1.5rem' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
