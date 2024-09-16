import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { InvestmentsPage } from './modules/assets/infra/investment/pages/InvestmentsPage';

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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
