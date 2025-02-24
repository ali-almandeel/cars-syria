import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContextProvider";
import { LocaleContextProvider } from "./context/LocaleContextProvider";
import { ThemeContextProvider } from "./context/ThemeContextProvider";
import "./index.css";
import queryClient from "./libs/reactQuery";
import { router } from "./libs/reactRouter";
import "./extensions";
function App() {
  return (
    <ThemeContextProvider>
      <LocaleContextProvider>
        <QueryClientProvider client={queryClient}>
          <AuthContextProvider>
            <RouterProvider
              // fallbackElement={<>Loading...</>}
              router={router}
            />
          </AuthContextProvider>
        </QueryClientProvider>
      </LocaleContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
