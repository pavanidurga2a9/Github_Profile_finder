import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(username);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto mb-8">
      <div className="glass-panel rounded-2xl p-2 flex items-center shadow-2xl shadow-indigo-950/20 focus-within:border-indigo-500/50 transition-all duration-300">
        <div className="pl-4 text-slate-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Enter GitHub username (e.g., torvalds)..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full bg-transparent px-4 py-3 text-slate-100 placeholder-slate-400 focus:outline-none text-base"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-indigo-500/20 active:scale-98 transition-all duration-200"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
