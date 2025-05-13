import {
  useQuery,
  useMutation,
  useQueryClient,
  UseMutationResult,
} from "@tanstack/react-query";
import { OrderControllerService } from "../api/services/OrderControllerService";
import { Order, OrderInputDto } from "../api";
import customToast from "../utilities/customToast";
import { useNavigate } from "react-router";
import { ePathVariables } from "../config/SupplierConfig";

function mapMutation<TData, TError, TVariables, TContext = unknown>(
  mutation: UseMutationResult<TData, TError, TVariables, TContext>
) {
  return {
    mutate: mutation.mutateAsync,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
    data: mutation.data,
  };
}

// hooks/useOrderList.ts
export function useOrderList() {
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

export function useOrders() {
  const qc = useQueryClient();
  const navigate = useNavigate();

  // const list = useQuery<Order[], Error>({
  //   queryKey: ["orders"],
  //   queryFn: () => OrderControllerService.list(),
  // });

  const fetchOne = (id: string) =>
    qc.fetchQuery<Order, Error>({
      queryKey: ["supplier", id],
      queryFn: () => OrderControllerService.getOrderById(id),
    });

  const create = mapMutation(
    useMutation<Order, Error, OrderInputDto>({
      mutationFn: (newSupplier) =>
        OrderControllerService.createOrder(newSupplier),
      onSuccess: () => {
        qc.invalidateQueries({ queryKey: ["suppliers"] });
        customToast("success", "Order created successfully!");
        navigate(ePathVariables.ORDERS);
      },
      onError: (error) => {
        customToast("error", `Failed to create order: ${error.message}`);
      },
    })
  );

  const update = mapMutation(
    useMutation<Order, Error, { id: string; data: OrderInputDto }>({
      mutationFn: ({ id, data }) =>
        OrderControllerService.updateOrder(id, data),

      onSuccess: () => {
        qc.invalidateQueries({ queryKey: ["suppliers"] });
        customToast("success", "Order updated!");
        navigate(ePathVariables.ORDERS);
      },
      onError: (err) => {
        customToast("error", `Update failed: ${err.message}`);
      },
    })
  );

  const remove = mapMutation(
    useMutation<void, Error, string>({
      mutationFn: (id: string) => OrderControllerService.deleteOrder(id),
      onSuccess: (_, id) => {
        qc.invalidateQueries({ queryKey: ["suppliers"] });
        customToast("success", `Order (ID: ${id}) deleted!`);
      },
      onError: (err, id) => {
        customToast(
          "error",
          `Failed to delete order (ID: ${id}): ${err.message}`
        );
      },
    })
  );

  return { fetchOne, create, update, remove };
}
