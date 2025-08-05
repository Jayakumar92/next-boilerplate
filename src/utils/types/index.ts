import { z } from "zod"

import type { errorResponseSchema } from "@/utils/validations"

export type ApiError = z.infer<typeof errorResponseSchema>
