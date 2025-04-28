'use client'

import { AppContextProvider } from "@/app/context/AppContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <AppContextProvider>{children}</AppContextProvider>;
}