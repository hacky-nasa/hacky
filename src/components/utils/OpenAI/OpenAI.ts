'use server'
import OpenAI from 'openai'
import { zodResponseFormat } from 'openai/helpers/zod.mjs'
import { PredictAgricultureEvent } from './schema'
import { MessagesInterface } from '../../contexts/OpenAI/interface'

export async function OpenAIPrompt(messages: MessagesInterface[]) {
  const openai = new OpenAI({ apiKey: process.env.OPEN_API_KEY! })

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages,
      response_format: zodResponseFormat(PredictAgricultureEvent, 'event'),
    })

    const completion_response = completion.choices[0].message

    console.log(completion)
    console.log(completion_response)

    if (completion_response.refusal) {
      // handle refusal
      console.log(completion_response.refusal)
    }

    return completion
  } catch (error: any) {
    // Handle edge cases
    if (error.constructor.name == 'LengthFinishReasonError') {
      // Retry with a higher max tokens
      console.log('Too many tokens: ', error.message)
    } else {
      // Handle other exceptions
      console.log('An error occurred: ', error.message)
    }
  }
}
