import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { InvestmentsPage } from './modules/assets/infra/investment/pages/InvestmentsPage';
import { AddInvestmentPage } from './modules/assets/infra/investment/pages/AddInvestmentPage';

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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
