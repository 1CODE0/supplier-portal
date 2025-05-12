import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Supplier, SupplierControllerService } from "../api";
import customToast from "../utilities/customToast";

export function useListSuppliers() {
  const query = useQuery<Supplier[], Error>({
    queryKey: ["suppliers"],
    queryFn: () => SupplierControllerService.listSuppliers(),
    staleTime: 5 * 60 * 1000,
  });

  return {
    suppliers: query.data ?? [],
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    isFetching: query.isFetching,
    refetch: query.refetch,
  };
}

export function useCreateSupplier() {
  const queryClient = useQueryClient();
  const mutation = useMutation<Supplier, Error, Supplier>({
    mutationFn: (newSupplier) =>
      SupplierControllerService.createSupplier(newSupplier),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["suppliers"] });
      customToast("success", "Supplier created successfully!");
    },
    onError: (error) => {
      customToast("error", `Failed to create supplier: ${error.message}`);
    },
  });

  return {
    createSupplier: mutation.mutateAsync,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
    data: mutation.data,
  };
}

export function useSupplierActions() {
  const queryClient = useQueryClient();

  const fetchSupplier = (id: string) =>
    queryClient.fetchQuery<Supplier, Error>({
      queryKey: ["supplier", id],
      queryFn: () => SupplierControllerService.getSupplierById(id),
      staleTime: 2 * 60 * 1000,
    });

  // const updateSupplier= (id: string) =>{
  //   return queryClient.

  // }

  return {
    fetchSupplier,
  };
}
