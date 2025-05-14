import { z } from "zod";

export const InputSchema = z.object({ search: z.string() });

export type InputType = z.infer<typeof InputSchema>;
