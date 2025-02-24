import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "../../layouts/rootLayout";
import { routesConfig } from "../../router/routesConfig";
import ProtectedRoute from "../../router/ProtectedRoute";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        {routesConfig.map((route, index) => (
          <Route
            key={`page-${index + route.path}`}
            path={route.path}
            element={
              <ProtectedRoute
                isProtected={route.isProtected}
                page={route.page}
                
              />
            }
          />
        ))}
      </Route>
    </>
  )
);