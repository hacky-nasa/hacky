'use client'
import { createContext, SetStateAction, useContext, useState } from 'react'
import {
  MessagesInterface,
  OpenAIContextInterface,
  OpenAIContextProviderProps,
} from './interface'

const OpenAIContext = createContext({} as OpenAIContextInterface)

export const useOpenAI = () => useContext(OpenAIContext)

export const OpenAIContextProvider: React.FC<OpenAIContextProviderProps> = ({
  children,
}) => {
  const [messages, setMessages] = useState<MessagesInterface[]>([
    {
      role: 'system',
      content: [{ type: 'text', text: '' }],
    },
  ])

  const contextValue = {
    messages,
    setMessages,
  }

  return (
    <OpenAIContext.Provider value={contextValue}>
      {children}
    </OpenAIContext.Provider>
  )
}
