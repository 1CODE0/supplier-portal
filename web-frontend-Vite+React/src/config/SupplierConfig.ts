export type NavItem = { label: string; path: string };

export const menuItems: NavItem[] = [
  { label: "Orders", path: "/orders" },
  { label: "Suppliers", path: "/suppliers" },
];

export enum ePathVariables {
  ORDERS = "/orders",
  NEW_ORDERS = "/orders/new",
  EDIT_ORDERS = "/orders/edit",
  SUPPLIERS = "/suppliers",
  NEW_SUPPLIERS = "/suppliers/new",
  EDIT_SUPPLIERS = "/suppliers/edit",
  ID = "/:id",
}
