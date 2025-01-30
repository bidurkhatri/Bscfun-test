'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen bg-[#1C1E26] text-white">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <main className="p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
} 