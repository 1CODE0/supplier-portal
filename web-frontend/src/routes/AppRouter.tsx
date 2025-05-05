// src/router/AppRouter.tsx
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { AuthGuard } from "./AuthGuard";
import OrdersPage from "../pages/orders/get-order/ViewOrders";
import NewOrderPage from "../pages/orders/new-order/CreateOrderPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { LoginPage } from "../pages/LoginPage";
import ErrorPage from "../ErrorPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Navigate to="/orders" replace />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      element: <AuthGuard />,
      children: [
        {
          path: "/orders",
          element: <OrdersPage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/orders/new",
          element: <NewOrderPage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/suppliers",
          element: <NewOrderPage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/suppliers/new",
          element: <NewOrderPage />,
          errorElement: <ErrorPage />,
        },

        // Add more nested protected routes here
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ],
  {
    future: {
      v7_startTransition: true,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any,
  }
);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
