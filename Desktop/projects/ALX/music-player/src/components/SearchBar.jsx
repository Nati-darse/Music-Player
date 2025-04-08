import React from "react";

const SearchBar = ({ query, onChange, onSubmit }) => (
  <form onSubmit={onSubmit} className="flex gap-2 p-4">
    <input
      type="text"
      value={query}
      onChange={onChange}
      placeholder="Search for songs, artists..."
      className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
    />
    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
      Search
    </button>
  </form>
);

export default SearchBar;