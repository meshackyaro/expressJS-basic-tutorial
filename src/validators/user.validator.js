import { z } from "zod";

export const createdUserSchema = z.object({
    name: z.string().min(1, "Name is required)");
    email:
})