'use client';

import { ReactNode, createContext, useContext, useState } from 'react';

interface LuckyContextType {
  isOpen: boolean;
  openLucky: () => void;
  closeLucky: () => void;
}

const LuckyContext = createContext<LuckyContextType | undefined>(undefined);

export function LuckyProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <LuckyContext.Provider
      value={{ isOpen, openLucky: () => setIsOpen(true), closeLucky: () => setIsOpen(false) }}
    >
      {children}
    </LuckyContext.Provider>
  );
}

export function useLucky() {
  const ctx = useContext(LuckyContext);
  if (!ctx) throw new Error('useLucky must be used within LuckyProvider');
  return ctx;
}
