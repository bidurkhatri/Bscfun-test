'use client';

import React from 'react';
import { FilterBar } from '@/components/features/FilterBar';

export function Sidebar() {
  return (
    <aside className="w-64 bg-[#1C1E26] p-4 border-r border-gray-700">
      <FilterBar />
    </aside>
  );
} 