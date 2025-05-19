import { useQuery, useMutation, useQueryClient, UseMutationResult } from '@tanstack/react-query'
import { Supplier, SupplierControllerService } from '../api'
import customToast from '../utilities/customToast'
import { ePathVariables } from '@/config/SupplierConfig'
import { useNav } from './useNav'

function mapMutation<TData, TError, TVariables, TContext = unknown>(
  mutation: UseMutationResult<TData, TError, TVariables, TContext>
) {
  return {
    mutate: mutation.mutateAsync,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
    data: mutation.data
  }
}

export function useSupplierList() {
  const query = useQuery<Supplier[], Error>({
    queryKey: ['suppliers'],
    queryFn: () => SupplierControllerService.listSuppliers()
  })

  return {
    suppliers: query.data ?? [],
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    isFetching: query.isFetching,
    refetch: query.refetch
  }
}

export function useSuppliers() {
  const qc = useQueryClient()
  const router = useNav()

  // const list = useQuery<Supplier[], Error>({
  //   queryKey: ["suppliers"],
  //   queryFn: () => SupplierControllerService.listSuppliers(),
  // });

  const fetchOne = (id: string) =>
    qc.fetchQuery<Supplier, Error>({
      queryKey: ['supplier', id],
      queryFn: () => SupplierControllerService.getSupplierById(id)
    })

  const create = mapMutation(
    useMutation<Supplier, Error, Supplier>({
      mutationFn: newSupplier => SupplierControllerService.createSupplier(newSupplier),
      onSuccess: () => {
        qc.invalidateQueries({ queryKey: ['suppliers'] })
        customToast('success', 'Supplier created successfully!')
        router.push(ePathVariables.SUPPLIERS)
      },
      onError: error => {
        customToast('error', `Failed to create supplier: ${error.message}`)
      }
    })
  )

  const update = mapMutation(
    useMutation<Supplier, Error, { id: string; data: Supplier }>({
      mutationFn: ({ id, data }) => SupplierControllerService.updateSupplier(id, data),

      onSuccess: () => {
        qc.invalidateQueries({ queryKey: ['suppliers'] })
        customToast('success', 'Supplier updated!')
        router.push(ePathVariables.SUPPLIERS)
      },
      onError: err => {
        customToast('error', `Update failed: ${err.message}`)
      }
    })
  )

  const remove = mapMutation(
    useMutation<void, Error, string>({
      mutationFn: (id: string) => SupplierControllerService.deleteSupplier(id),
      onSuccess: (_, id) => {
        qc.invalidateQueries({ queryKey: ['suppliers'] })
        customToast('success', `Supplier (ID: ${id}) deleted!`)
      },
      onError: (err, id) => {
        customToast('error', `Failed to delete supplier (ID: ${id}): ${err.message}`)
      }
    })
  )

  return { fetchOne, create, update, remove }
}
