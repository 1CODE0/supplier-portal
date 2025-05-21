export enum ePathVariables {
  LOGIN = '/login',
  ORDERS = '/orders/get-orders',
  NEW_ORDERS = '/orders/new-order',
  EDIT_ORDERS = '/orders/edit?id=',
  SUPPLIERS = '/suppliers/get-suppliers',
  NEW_SUPPLIERS = '/suppliers/new-supplier',
  EDIT_SUPPLIERS = '/suppliers/edit?id='
}

export type NavItem = { label: string; path: string }

export const menuItems: NavItem[] = [
  { label: 'Orders', path: ePathVariables.ORDERS },
  { label: 'Suppliers', path: ePathVariables.SUPPLIERS }
]
