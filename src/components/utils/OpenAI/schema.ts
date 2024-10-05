import { z } from 'zod'

const Crops = z.object({
  plantName: z.string(),
  explanation: z.string(),
})

const Pests = z.object({
  pestsName: z.string(),
  explanation: z.string(),
})

const Weeds = z.object({
  weedsName: z.string(),
  explanation: z.string(),
})

export const PredictAgricultureEvent = z.object({
  parameterExplanation: z.object({
    soilMoisture: z.string(),
    temperature: z.string(),
    windSpeed: z.string(),
    windDirection: z.string(),
    humidity: z.string(),
  }),
  bestCropsToPlant: z.array(Crops),
  MyCropsExplanation: z.object({
    recommendToPlant: z.boolean(),
    summary: z.string(),
    details: z.array(z.string()),
    pests: z.array(Pests),
    weeds: z.array(Weeds),
  }),
})
