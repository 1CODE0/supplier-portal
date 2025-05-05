// src/hooks/useSuppliers.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { SupplierControllerService } from "../api";
import { SupplierInput } from "../models/supplierModel";

export function useSuppliers() {
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

  const getSuppliersQuery = useSupplierQuery;

  return {
    ...listSuppliersQuery,
    listSuppliersQuery: listSuppliersQuery.data ?? [],
    createSupplierMutation,
    getSuppliersQuery,
  };
}

const useSupplierQuery = (supplierId: string) => {
  return useQuery({
    queryKey: ["supplier", supplierId],
    queryFn: () => SupplierControllerService.getSupplierById(supplierId!),
    enabled: !!supplierId,
  });
};

// // src/hooks/useSuppliers.ts
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { SupplierControllerService } from "../api";
// import { SupplierInput } from "../models/supplierModel";

// export function useGetCreateUpdateSuppliers() {
//   const queryClient = useQueryClient();

//   const listSuppliersQuery = useQuery({
//     queryKey: ["suppliers"],
//     queryFn: () => SupplierControllerService.listSuppliers(),
//   });

//   const createSupplierMutation = useMutation({
//     mutationFn: (newSupplier: SupplierInput) =>
//       SupplierControllerService.createSupplier(newSupplier),
//     onSuccess: () => queryClient.invalidateQueries({ queryKey: ["suppliers"] }),
//   });

//   return {
//     ...listSuppliersQuery,
//     listSuppliersQuery: listSuppliersQuery.data ?? [],
//     createSupplierMutation,
//     ...getSuppliersQuery,
//     getSupplierQuery: getSuppliersQuery.data,
//   };
// }

// export function useGetDeleteBySuppliersId() {
//   const getSupplierById = (supplierId: string) => {
//     return useQuery({
//       queryKey:  ['supplier', supplierId],
//       queryFn: () => SupplierControllerService.getSupplierById(supplierId),
//   });
//   return {
//     ...getSupplierById,
//     getSupplierById: getSupplierById.data,
//   };
// }

// };
