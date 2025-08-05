"use client"

import { ReduxProvider } from "@/redux-store/provider"

type ProviderProps = {
  children: React.ReactNode
}

function Provider({ children }: ProviderProps) {
  return <ReduxProvider>{children}</ReduxProvider>
}

export { Provider }
