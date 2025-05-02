import { z } from "zod";

// models.ts
export const orderInputSchema = z.object({
  supplierId: z.number().min(1, "Please select a supplier"),
  amount: z.number().min(0.01, "Amount must be > 0"),
});
export type OrderInput = z.infer<typeof orderInputSchema>;

export const orderSchema = orderInputSchema.extend({
  id: z.number(),
  createdAt: z.string(),
});
export type Order = z.infer<typeof orderSchema>;
