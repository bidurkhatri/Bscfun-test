'use client';

import React from 'react';

export function FilterBar() {
  return (
    <div className="flex flex-col space-y-4">
      <button className="bg-[#98FB98] text-black p-2 rounded">Featured</button>
      <div className="flex items-center space-x-2">
        <label className="text-gray-300">Animations</label>
        <input type="checkbox" />
      </div>
      <div className="flex items-center space-x-2">
        <label className="text-gray-300">NSFW</label>
        <input type="checkbox" />
      </div>
    </div>
  );
} 