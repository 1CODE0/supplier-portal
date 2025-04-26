'use client'

import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TextField, Button, Paper, Typography, Box } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useOrders } from '@/hooks/useOrders'
import { orderInputSchema, OrderInput } from '@/api/models'

export default function NewOrderPage() {
  const router = useRouter()
  const { createOrder } = useOrders()

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<OrderInput>({
    resolver: zodResolver(orderInputSchema)
  })

  const onSubmit = async (data: OrderInput) => {
    console.log('🚀 ~ page.tsx:25 ~ onSubmit ~ data:', data)
    await createOrder.mutateAsync(data)
    router.push('/orders')
  }

  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant='h5' component='h1' gutterBottom style={{ fontWeight: 'bold' }}>
        Create New Order
      </Typography>

      <Box component='form' onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Controller
          name='supplier'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              {...field}
              label='Supplier'
              error={!!errors.supplier}
              helperText={errors.supplier?.message}
              fullWidth
            />
          )}
        />

        <Controller
          name='amount'
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              type='number'
              label='Amount'
              onChange={event => {
                field.onChange(!event.target.value ? 0 : Number(event.target.value))
              }}
              error={!!errors.amount}
              helperText={errors.amount?.message}
              fullWidth
            />
          )}
        />

        <Button
          type='submit'
          variant='contained'
          color='secondary'
          disabled={isSubmitting}
          sx={{ alignSelf: 'flex-start' }}
        >
          {isSubmitting ? 'Creating…' : 'Create Order'}
        </Button>
      </Box>
    </Paper>
  )
}
