import { z } from 'zod'

// models.ts
export const orderInputSchema = z.object({
  supplier: z.string().min(1, 'Supplier is required'),
  amount: z.number().positive('Amount must be > 0')
})
export type OrderInput = z.infer<typeof orderInputSchema>

export const orderSchema = orderInputSchema.extend({
  id: z.number(),
  createdAt: z.string()
})
export type Order = z.infer<typeof orderSchema>
