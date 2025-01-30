'use client';

import React from 'react';
import Image from 'next/image';

interface Token {
  id: string;
  name: string;
  creator: string;
  marketCap: string;
  description: string;
}

interface TokenCardProps {
  token: Token;
}

export function TokenCard({ token }: TokenCardProps) {
  return (
    <div className="bg-[#1C1E26] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <Image
        src={`https://picsum.photos/seed/${token.id}/300/200`}
        alt={token.name}
        width={300}
        height={200}
        className="rounded-t-lg"
      />
      <div className="p-2">
        <h3 className="text-lg font-bold">{token.name}</h3>
        <p className="text-secondary">{token.creator}</p>
        <p className="text-sm">{token.description}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-highlight">{token.marketCap}</span>
        </div>
      </div>
    </div>
  );
} 