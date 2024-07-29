import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AddInvestmentPage } from "./modules/investments/pages/AddInvestmentPage";
import { InvestmentsPage } from "./modules/investments/pages/InvestmentsPage";

export function Router() {
  const router = createBrowserRouter([
    { path: "", element: <InvestmentsPage /> },
    {
      path: "investimento/novo",
      element: <AddInvestmentPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}
