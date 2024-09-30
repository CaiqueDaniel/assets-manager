import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { InvestmentsPage } from './modules/financial-assets/infra/investment/pages/InvestmentsPage';
import { AddInvestmentPage } from './modules/financial-assets/infra/investment/pages/AddInvestmentPage';
import { AddOperationPage } from './modules/financial-assets/infra/operation/pages/AddOperationPage';
import { UpdateOperationPage } from './modules/financial-assets/infra/operation/pages/UpdateOperationPage';

export function Router() {
  const router = createBrowserRouter([
    {
      path: '',
      element: <Outlet />,
      children: [
        {
          path: '',
          element: <InvestmentsPage />,
        },
        {
          path: 'investment/new',
          element: <AddInvestmentPage />,
        },
        {
          path: 'investment/:investmentId/operation/new',
          element: <AddOperationPage />,
        },
        {
          path: 'investment/:investmentId/operation/:operationId/edit',
          element: <UpdateOperationPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
