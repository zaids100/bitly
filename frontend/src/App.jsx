import React, { useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Header from './Components/Header';

function App() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const [link, setLink] = useState("");

  const copyLink = () => { // To copy the div content
    navigator.clipboard.writeText(link).then(() => {
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
  };

  // URL validation function
  const isValidUrl = (str) => {
    const pattern = /^(https?:\/\/)?([a-z0-9]+\.)?[a-z0-9-]+\.[a-z]{2,6}(\/[\w\-\.~!$&'()*+,;=]*)*(\?[^\s]*)?(#[^\s]*)?$/i;
    return pattern.test(str);
  };

  // Handle URL submission
  const handleSubmitUrl = async () => {
    if (!isValidUrl(url)) {
      alert('Please enter a valid URL');
      return;
    }

    setLoading(true); // Start loading

    try {
      const response = await fetch('https://bitly-okbv.onrender.com/generate-short-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          originalUrl: url,
        }),
      });

      if (!response.ok) {
        console.log('Server Error');
        return;
      }

      const data = await response.json();
      setShortUrl(data.shortUrl);
      setLink(data.shortUrl);

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="h-screen w-full bg-gradient-to-b from-gray-800 to-black overflow-hidden">
      <Header />

      <div className="flex flex-col items-center h-full px-4 py-12">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 font-bold text-4xl sm:text-5xl mt-10 font-semibold pb-8 text-center">
          <ReactTypingEffect
            text={['Transform Long URLs into Short, Easy Links for Free']}
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
              onChange={(e) => setUrl(e.target.value)}
              type="text"
              placeholder="Enter URL here"
              className="p-4 bg-gray-800 text-gray-200 border border-gray-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-[830px] transition-all"
            />

            <button
              onClick={handleSubmitUrl}
              className="w-56 bg-gradient-to-r from-blue-500 to-teal-500 text-white my-3 py-3 px-6 rounded-lg shadow-md hover:from-blue-600 hover:to-teal-600 transition-all flex items-center justify-center gap-2"
            >
              <span>Get Link Here</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </button>
          </div>

          <div className="mt-4 text-center text-gray-200">
            {loading ? (
              <div>Loading...</div>
            ) : (
              shortUrl && (
                <div className="bg-gradient-to-r from-gray-800 to-black-700 mt-5 px-8 py-6 rounded-2xl shadow-xl max-w-4xl w-full flex items-center justify-between">
                  <div className="text-gray-300 text-lg font-medium max-w-md overflow-hidden text-ellipsis" id="link-text">
                    {link}
                  </div>
                  <button
                    className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 px-8 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-600 transition-all ease-in-out duration-200 flex items-center gap-2"
                    onClick={copyLink}
                  >
                    <span className="text-lg">Copy Link!</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
