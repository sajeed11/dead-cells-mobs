import { z } from 'zod'

const EnemieSchema = z.object({
  title: z.string(),
  location: z.string().array(),
  baseHealth: z.number(),
  behavior: z.string(),
  id: z.string()
})

export type Enemie = z.infer<typeof EnemieSchema>