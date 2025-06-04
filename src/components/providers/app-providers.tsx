"use client";

import React from 'react';

export function AppProviders({ children }: { children: React.ReactNode }) {
  // In the future, QueryClientProvider, ThemeProvider, etc. would go here
  return <>{children}</>;
}
