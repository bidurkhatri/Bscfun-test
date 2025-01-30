'use client';

import React from 'react';
import { WalletConnect } from '@/components/features/WalletConnect';
import { MarketCapDisplay } from '@/components/features/MarketCapDisplay';

export function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-[#1C1E26] border-b border-gray-700">
      <MarketCapDisplay />
      <WalletConnect />
    </header>
  );
} 