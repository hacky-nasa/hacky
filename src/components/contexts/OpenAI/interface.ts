import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface OpenAIContextProviderProps {
  children: ReactNode
}

export interface OpenAIContextInterface {
  messages: MessagesInterface[]
  setMessages: Dispatch<SetStateAction<MessagesInterface[]>>
}

export interface MessagesInterface {
  role: 'user' | 'assistant' | 'system'
  content: MessageContentInterface[]
}

export interface MessageContentInterface {
  type: 'text'
  text: string
}
