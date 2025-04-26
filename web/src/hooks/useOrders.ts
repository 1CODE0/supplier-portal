// web/src/hooks/useOrders.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { OrderControllerService } from '@/api/services/OrderControllerService'
import type { Order } from '@/api/models/Order'

export function useOrders() {
  const queryClient = useQueryClient()

  const ordersQuery = useQuery<Order[]>({
    queryKey: ['orders'],
    queryFn: () => OrderControllerService.list()
  })

  const createOrder = useMutation({
    mutationFn: (newOrder: Order) => OrderControllerService.create(newOrder),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] })
    }
  })

  return {
    ...ordersQuery,
    orders: ordersQuery.data ?? [],
    createOrder
  }
}
