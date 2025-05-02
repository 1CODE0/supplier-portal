// src/hooks/useSuppliers.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { SupplierControllerService } from "../api";
import { SupplierInput } from "../models/supplierModel";

export function useSuppliers(supplierId?: number) {
  const queryClient = useQueryClient();

  const listSuppliersQuery = useQuery({
    queryKey: ["suppliers"],
    queryFn: () => SupplierControllerService.listSuppliers(),
  });

  const createSupplierMutation = useMutation({
    mutationFn: (newSupplier: SupplierInput) =>
      SupplierControllerService.createSupplier(newSupplier),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["suppliers"] }),
  });

  // const getSuppliersQuery = useQuery({
  //   queryKey: ["supplier", supplierId],
  //   queryFn: () => SupplierControllerService.getSupplier(supplierId!),
  //   enabled: !!supplierId,
  // });

  return {
    ...listSuppliersQuery,
    listSuppliersQuery: listSuppliersQuery.data ?? [],
    createSupplierMutation,
    // ...getSuppliersQuery,
    // getSupplierQuery: getSuppliersQuery.data,
  };
}
