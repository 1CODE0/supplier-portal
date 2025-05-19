export enum ePathVariables {
  LOGIN = '/login',
  ORDERS = '/orders/get-orders',
  NEW_ORDERS = '/orders/new',
  EDIT_ORDERS = '/orders/new?id=',
  SUPPLIERS = '/suppliers',
  NEW_SUPPLIERS = '/suppliers/new',
  EDIT_SUPPLIERS = '/suppliers/new?id='
}

export type NavItem = { label: string; path: string }

export const menuItems: NavItem[] = [
  { label: 'Orders', path: ePathVariables.ORDERS },
  { label: 'Suppliers', path: ePathVariables.SUPPLIERS }
]
