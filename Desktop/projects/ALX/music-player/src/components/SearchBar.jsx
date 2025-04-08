import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (input.length > 2) {
        onSearch(input);
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, [input]);

  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(input);
      }}
      className={`mb-6 transition-all duration-200 ${isFocused ? 'ring-2 ring-blue-500' : ''}`}
    >
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search by song, artist, or album"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="block w-full pl-10 pr-12 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
        />
        {input && (
          <button
            type="button"
            onClick={() => setInput("")}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
          >
            ✕
          </button>
        )}
      </div>
    </form>
  );
};

export default SearchBar;