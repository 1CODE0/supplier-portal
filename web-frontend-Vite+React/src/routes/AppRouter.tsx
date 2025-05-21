// src/router/AppRouter.tsx
import React, { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
  ScrollRestoration,
  PrefetchPageLinks,
} from "react-router-dom";
import { AuthGuard } from "./AuthGuard";
import NavBar from "../utilities/NavBar";
import { CustomLoader } from "../utilities/CustomLoader";
import { ePathVariables } from "../config/SupplierConfig";

// Lazy-loaded pages
const OrdersPage = lazy(() => import("../pages/orders/get-order/ViewOrders"));
const NewOrderPage = lazy(
  () => import("../pages/orders/new-order/CreateOrderPage")
);
const ViewSuppliers = lazy(
  () => import("../pages/suppliers/get-suppliers/ViewSuppliers")
);
const CreateSupplierPage = lazy(
  () => import("../pages/suppliers/new-supplier/CreateSupplierPage")
);
const LoginPage = lazy(() => import("../pages/LoginPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const ErrorPage = lazy(() => import("../ErrorPage"));

// Reusable Suspense wrapper
const withLoader = (Component: React.LazyExoticComponent<React.FC>) => (
  <Suspense fallback={<CustomLoader />}>
    <Component />
  </Suspense>
);

// Root layout with NavBar
const RootLayout: React.FC = () => (
  <>
    <NavBar />
    <ScrollRestoration />
    <PrefetchPageLinks page="orders" />
    <PrefetchPageLinks page="suppliers" />
    <Outlet />
  </>
);

// Router definition
const router = createBrowserRouter(
  [
    { path: "/", element: <Navigate to={ePathVariables.ORDERS} replace /> },
    { path: "/login", element: withLoader(LoginPage) },
    {
      element: <AuthGuard />, // Wrap protected routes
      errorElement: withLoader(ErrorPage),
      children: [
        {
          element: <RootLayout />, // Chrome + NavBar
          children: [
            {
              id: "orders",
              path: `${ePathVariables.ORDERS}`,
              element: withLoader(OrdersPage),
            },
            {
              id: "orders-new",
              path: `${ePathVariables.NEW_ORDERS}`,
              element: withLoader(NewOrderPage),
            },
            {
              id: "orders-edit",
              path: `${ePathVariables.EDIT_ORDERS + ePathVariables.ID}`,
              element: withLoader(NewOrderPage),
            },
            {
              id: "suppliers",
              path: `${ePathVariables.SUPPLIERS}`,
              element: withLoader(ViewSuppliers),
            },
            {
              id: "suppliers-new",
              path: `${ePathVariables.NEW_SUPPLIERS}`,
              element: withLoader(CreateSupplierPage),
            },
            {
              id: "suppliers-edit",
              path: `${ePathVariables.EDIT_SUPPLIERS + ePathVariables.ID}`,
              element: withLoader(CreateSupplierPage),
            },
          ],
        },
      ],
    },
    { path: "*", element: withLoader(NotFoundPage) },
  ]
  // {
  //   future: { v7_startTransition: true },
  // }
);

export const AppRouter: React.FC = () => <RouterProvider router={router} />;
