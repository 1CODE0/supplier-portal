import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { OrderControllerService } from "../api/services/OrderControllerService";
import { OrderDTO } from "../api";

export function useOrders(orderId?: number) {
  const queryClient = useQueryClient();

  const listOrdersQuery = useQuery({
    queryKey: ["orders"],
    queryFn: () => OrderControllerService.listOrders(),
  });

  // const getOrderQuery = useQuery({
  //   queryKey: ["order", orderId],
  //   queryFn: () => OrderControllerService.getOrder(orderId!),
  //   enabled: !!orderId,
  // });

  const createOrderMutation = useMutation({
    mutationFn: (newOrder: OrderDTO) =>
      OrderControllerService.createOrder({
        amount: newOrder.amount,
        supplier: newOrder.supplier,
      }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["orders"] }),
  });

  // const updateOrderMutation = useMutation({
  //   mutationFn: (payload: { id: number; data: OrderInput }) =>
  //     OrderControllerService.updateOrder(payload.id, payload.data),
  //   onSuccess: () => queryClient.invalidateQueries({ queryKey: ["orders"] }),
  // });

  // const deleteOrderMutation = useMutation({
  //   mutationFn: (id: number) => OrderControllerService.deleteOrder(id),
  //   onSuccess: () => queryClient.invalidateQueries({ queryKey: ["orders"] }),
  // });

  return {
    ...listOrdersQuery,
    listOrdersQuery: listOrdersQuery.data ?? [],
    // ...getOrderQuery,
    // getOrderQuery: getOrderQuery.data,
    createOrderMutation,
    // updateOrderMutation,
    // deleteOrderMutation,
  };
}
