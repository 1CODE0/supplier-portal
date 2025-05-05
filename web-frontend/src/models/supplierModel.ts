import { z } from "zod";

export const supplierInputSchema = z.object({
  supplierName: z
    .string()
    .min(1, "Supplier name is required") // Ensures the supplier name is not empty
    .max(255, "Supplier name is too long"), // Optional max length (you can adjust based on DB constraints)

  contactEmail: z
    .string()
    .email("Invalid email format") // Ensures the email is valid
    .min(1, "Contact email is required"), // Ensures email is not empty

  phone: z
    .string()
    .optional() // Makes the phone optional
    .refine((value) => value === undefined || value.length <= 20, {
      message: "Phone number is too long", // Custom validation for max length
    }),

  address: z
    .string()
    .optional() // Makes the address optional
    .refine((value) => value === undefined || value.length <= 255, {
      message: "Address is too long", // Custom validation for max length
    }),
});

export type SupplierInput = z.infer<typeof supplierInputSchema>;
