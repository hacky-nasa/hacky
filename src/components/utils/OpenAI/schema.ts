import { z } from 'zod'

const Crops = z.object({
  plantName: z.string(),
  explanation: z.string(),
})

const Pests = z.object({
  pestsName: z.string(),
  explanation: z.string(),
  impactOfEnvironmentalConditions: z.string(),
  preventionAndEarlyDetection: z.string(),
})

const Weeds = z.object({
  weedsName: z.string(),
  explanation: z.string(),
  impactOfEnvironmentalConditions: z.string(),
  preventionAndEarlyDetection: z.string(),
})

const ParameterExplanation = z.object({
  index: z.string(),
  summary: z.string(),
})

export const PredictAgricultureEvent = z.object({
  parameterExplanation: z.object({
    soilMoisture: ParameterExplanation,
    temperature: ParameterExplanation,
    windSpeed: ParameterExplanation,
    windDirection: ParameterExplanation,
    humidity: ParameterExplanation,
  }),
  bestCropsToPlant: z.array(Crops),
  MyCropsExplanation: z.object({
    isIAskSpecificCropsRecomendation: z.boolean(),
    recommendToPlant: z.boolean(),
    summary: z.string(),
    details: z.object({
      why: z.string(),
      when: z.string(),
    }),
    pests: z.array(Pests),
    weeds: z.array(Weeds),
  }),
  summarizeOfAllAnswerAndData: z.string(),
  anotherContext: z.string(),
})
