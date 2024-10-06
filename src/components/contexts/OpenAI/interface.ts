import { ChatCompletionMessage } from 'openai/resources/index.mjs'
import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface OpenAIContextProviderProps {
  children: ReactNode
}

export interface OpenAIContextInterface {
  messages: MessagesInterface[]
  setMessages: Dispatch<SetStateAction<MessagesInterface[]>>
  handleGetGeneralData: () => Promise<ChatCompletionMessage | undefined>
  location:
    | {
        lat: number
        lng: number
      }
    | null
    | undefined
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  openAIResponse: ChatCompletionMessage | undefined
  setOpenAIResponse: Dispatch<SetStateAction<ChatCompletionMessage | undefined>>
  hitOpenAI: (
    newMessages: MessagesInterface[]
  ) => Promise<ChatCompletionMessage | undefined>
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
  searchResponse: {
    recommendToPlant: boolean
    alreadySearch: boolean
    summary: string
  }
  setSearchResponse: Dispatch<
    SetStateAction<{
      recommendToPlant: boolean
      alreadySearch: boolean
      summary: string
    }>
  >
}

export type OpenAIRole = 'user' | 'assistant' | 'system'

export interface MessagesInterface {
  role: OpenAIRole
  content: MessageContentInterface[] | string
}

export interface MessageContentInterface {
  type: 'text'
  text: string
}
