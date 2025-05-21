// web/src/providers.tsx
"use client";

import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactNode } from "react";
import customToast from "../utilities/customToast";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      customToast("error", `An error occurred: ${error.message}`);
    },
  }),
  defaultOptions: {
    queries: {
      gcTime: 10000 * 30,
      retry: 2,
      retryDelay: () => 2_000,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
    // mutations,
  },
});

export function QueryProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
