import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { OrderControllerService } from "../api/services/OrderControllerService";
import { Order } from "../api";
import customToast from "../utilities/customToast";

export function useListOrders() {
  const query = useQuery<Order[], Error>({
    queryKey: ["orders"],
    queryFn: () => OrderControllerService.list(),
  });

  return {
    orders: query.data ?? [],
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    isFetching: query.isFetching,
    refetch: query.refetch,
  };
}

export function useCreateOrder() {
  const queryClient = useQueryClient();
  const mutation = useMutation<Order, Error, Order>({
    mutationFn: (newOrder) => OrderControllerService.createOrder(newOrder),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      customToast("success", "Order created successfully!");
    },
    onError: (error) => {
      customToast("error", `Failed to create order: ${error.message}`);
    },
  });

  return {
    createOrder: mutation.mutateAsync,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
    data: mutation.data,
  };
}

export function useOrderById(orderId: string) {
  const query = useQuery<Order, Error>({
    queryKey: ["orders", orderId],
    queryFn: () => OrderControllerService.getOrderById(orderId!),
    enabled: Boolean(orderId),
    staleTime: 2 * 60 * 1000,
  });

  return {
    order: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    isFetching: query.isFetching,
    refetch: query.refetch,
  };
}
