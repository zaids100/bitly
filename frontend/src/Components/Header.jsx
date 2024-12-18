import { FaLink } from 'react-icons/fa'; 

function Header() {
  return (
    <div className="w-full bg-gray-900 py-4 px-8 flex justify-between items-center shadow-lg">
      <div className="flex items-center text-white text-2xl">
        <FaLink className="mr-2 w-8 h-8 text-gradient bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500" />

        <span className="font-semibold">URL Shortener</span>
      </div>

      <div className="flex gap-4">
        <button className="text-white bg-gradient-to-r from-blue-500 to-teal-500 py-2 px-4 rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all">
          Login
        </button>
        <button className="text-white bg-gray-700 py-2 px-4 rounded-lg hover:bg-gray-600 transition-all">
          Signup
        </button>
      </div>
    </div>
  );
}

export default Header;
