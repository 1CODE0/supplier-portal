import { z } from "zod";

export const supplierInputSchema = z.object({
  supplierName: z.string(),
});
export type SupplierInput = z.infer<typeof supplierInputSchema>;
