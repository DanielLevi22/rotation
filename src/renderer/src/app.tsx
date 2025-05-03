import { QueryClientProvider } from '@tanstack/react-query'

import { Routes } from "./Router";
import { queryClient } from "./lib/react-query";

export function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes />
     </QueryClientProvider>
    </>
  )
}
