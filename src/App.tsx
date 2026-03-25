import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lottie from "lottie-react";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// 👉 IMPORT JSON (WAJIB ADA DI FOLDER INI)
import loadingAnimation from "./assets/loading.json";

const queryClient = new QueryClient();

// --- Loading Screen ---
const LoadingScreen = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
      }}
    >
      <div style={{ width: 250, height: 250 }}>
        <Lottie animationData={loadingAnimation} loop />
      </div>

      {/* teks tambahan biar lebih keren */}
      <h2 style={{ color: "white", marginTop: 20 }}>
        Loading...
      </h2>
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
<button className="btn">Hover Aku</button>