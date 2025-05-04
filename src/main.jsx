import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import router from "./Routes/Routes.jsx";
import AuthProvider from "./auth/AuthProvider.jsx";
import "./index.css";

location.replace("https://rakibul-dev.vercel.app");

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
