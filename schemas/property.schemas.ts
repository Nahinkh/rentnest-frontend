import { z } from "zod";

export const propertySchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  rentPrice: z.coerce.number().positive("Rent price must be a positive number"),
  bedrooms: z.coerce.number().int().nonnegative("Bedrooms must be 0 or more"),
  bathrooms: z.coerce.number().positive("Bathrooms must be at least 1"),
  area: z.coerce.number().positive("Area must be a positive number (sq.ft)"),
  address: z.string().min(3, "Address is required"),
  city: z.string().min(2, "City is required"),
  division: z.string().min(2, "Division is required"),
  latitude: z.coerce.number().min(-90).max(90),
  longitude: z.coerce.number().min(-180).max(180),
  category: z.string().min(1, "Category is required"),
  categoryDescription: z.string().optional(),
  images: z
    .array(z.instanceof(File))
    .min(1, "At least one image is required")
    .max(10, "You can upload a maximum of 10 images")
    .refine(
      (files) =>
        files.every((file) =>
          ["image/jpeg", "image/png", "image/webp"].includes(file.type),
        ),
      "Only JPG, PNG, and WEBP images are allowed",
    )
    .refine(
      (files) => files.every((file) => file.size <= 5 * 1024 * 1024),
      "Each image must be smaller than 5MB",
    ),
});

export type PropertyFormData = z.infer<typeof propertySchema>;
