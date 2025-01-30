'use client';

import React from 'react';
import { TokenCard } from '@/components/features/TokenCard';

interface Token {
  id: string;
  name: string;
  creator: string;
  marketCap: string;
  description: string;
}

interface TokenGridProps {
  tokens: Token[];
}

export function TokenGrid({ tokens }: TokenGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {tokens.map((token) => (
        <TokenCard key={token.id} token={token} />
      ))}
    </div>
  );
} 