import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AddInvestmentPage } from "./modules/investments/pages/AddInvestmentPage";

export function Router() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <AddInvestmentPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}
