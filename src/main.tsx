import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./app.component";
import { router } from "./router";
import { ApiContext, apiContext } from "./context/api.context";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnMount: false, refetchOnWindowFocus: false },
  },
});

(async () => {
  const defaultValue = await apiContext();

  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ApiContext.Provider value={defaultValue}>
          <RouterProvider router={router} />
        </ApiContext.Provider>
      </QueryClientProvider>
    </React.StrictMode>
  );
})();
