import { useState, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoadingScreen } from "@/components/LoadingScreen";
import Index from "./pages/Index";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {isLoading ? (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        ) : (
          <Suspense fallback={null}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
              </Routes>
            </BrowserRouter>
          </Suspense>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;