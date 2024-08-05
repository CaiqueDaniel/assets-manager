import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AddInvestmentPage } from "./modules/investments/pages/AddInvestmentPage";
import { InvestmentsPage } from "./modules/investments/pages/InvestmentsPage";
import { InvestmentsGatewayProvider } from "./modules/investments/providers/InvestmentsGatewayProvider";

export function Router() {
  const router = createBrowserRouter([
    {
      path: "",
      element: (
        <InvestmentsGatewayProvider>
          <InvestmentsPage />
        </InvestmentsGatewayProvider>
      ),
    },
    {
      path: "investimento/novo",
      element: (
        <InvestmentsGatewayProvider>
          <AddInvestmentPage />
        </InvestmentsGatewayProvider>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}
