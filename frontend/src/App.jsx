import React from 'react';
import ReactTypingEffect from 'react-typing-effect'; 
import Header from './Components/Header';

function App() {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-gray-800 to-black overflow-hidden">
      <Header />

      <div className="flex flex-col items-center h-full px-4 py-12">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 font-bold text-4xl sm:text-5xl mt-10 font-semibold pb-8 text-center">
          <ReactTypingEffect
            text={["Transform Long URLs into Short, Easy Links for Free"]}
            speed={80}
            typingDelay={500}
            eraseSpeed={50}
            cursor="!"
          /> 
        </h1>

        <div className="bg-gray-900 mt-8 px-8 py-6 rounded-xl shadow-xl max-w-4xl w-full">
          <h2 className="text-gray-300 text-lg font-medium pb-4">
            Paste your long link here:
          </h2>

          <div className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Enter URL here"
              className="p-4 bg-gray-800 text-gray-200 border border-gray-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-[830px] transition-all"
            />
            
            <button className="w-72 bg-gradient-to-r from-blue-500 to-teal-500 text-white my-3 py-3 px-6 rounded-lg shadow-md hover:from-blue-600 hover:to-teal-600 transition-all flex items-center justify-center gap-2">
              <span>Get Your Free Link Here</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </button>

          </div>

          <div className="mt-4 text-center text-gray-200">
            <p className="text-green-500">URL Shortened Successfully!</p>
            {/* Uncomment to display error message */}
            {/* <p className="text-red-500">Invalid URL</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
