import { z } from "zod";
import { Order } from "../api";

export const orderInputSchema = z.object({
  supplier: z
    .string()
    .uuid("Invalid supplier ID format") // Assuming UUID format for the supplier ID
    .min(1, "Please select a supplier"), // Ensuring it's not empty
  totalAmount: z
    .number()
    .min(0.01, "Amount must be greater than 0") // Ensure the total amount is > 0
    .max(9999999999.99, "Amount is too large"), // Maximum value to handle precision
  description: z.string().optional(), // Description is optional in the Order entity
  status: z
    .enum(Object.values(Order.status) as [string, ...string[]])
    .optional(),
  orderDate: z.string().optional(), // Assuming orderDate can be provided as a string in ISO format, default will be set in backend
});

export type OrderInput = z.infer<typeof orderInputSchema>;

// export const orderSchema = orderInputSchema.extend({
//   id: z.number(),
//   createdAt: z.string(),
// });
// export type Order = z.infer<typeof orderSchema>;
