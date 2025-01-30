'use client';

import { TokenGrid } from '@/components/layout/TokenGrid';

export default function HomePage() {
  const tokens = [
    // Example token data
    { id: '1', name: 'Token A', creator: 'Alice', marketCap: '$1M', description: 'A great token' },
    { id: '2', name: 'Token B', creator: 'Bob', marketCap: '$2M', description: 'Another great token' },
    // Add more tokens as needed
  ];

  return (
    <div className="container mx-auto p-6">
      <TokenGrid tokens={tokens} />
    </div>
  );
} 