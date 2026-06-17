import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-4">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-4 border-indigo-500/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p className="text-sm font-medium text-indigo-400 animate-pulse">Scanning GitHub database...</p>
    </div>
  );
};

export default Loader;
