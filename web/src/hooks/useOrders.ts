// web/src/hooks/useOrders.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { OrderControllerService } from '@/api/services/OrderControllerService'
import type { Order } from '@/api/models/Order'

// Define the shape of a new order (omit server-generated fields)
export type NewOrder = Omit<Order, 'id' | 'createdAt'>

export function useOrders() {
  const queryClient = useQueryClient()

  // 1) Fetch all orders
  const ordersQuery = useQuery<Order[]>({
    queryKey: ['orders'],
    queryFn: () => OrderControllerService.list()
  })

  // 2) Mutation to create an order
  const createOrder = useMutation({
    mutationFn: (newOrder: NewOrder) => OrderControllerService.create(newOrder),
    onSuccess: () => {
      // Invalidate & refetch the list
      queryClient.invalidateQueries({ queryKey: ['orders'] })
    }
  })

  return {
    // Spread in isLoading, data, error, etc.
    ...ordersQuery,
    orders: ordersQuery.data ?? [],
    createOrder
  }
}
