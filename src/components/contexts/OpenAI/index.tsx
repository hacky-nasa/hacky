'use client'
import { createContext, useContext, useState } from 'react'
import {
  MessagesInterface,
  OpenAIContextInterface,
  OpenAIContextProviderProps,
  OpenAIRole,
} from './interface'
import { useRouter } from 'next/navigation'
import { fetchData } from '../../utils/meteomatics'
import { OpenAIPrompt } from '../../utils/OpenAI/OpenAI'
import { ChatCompletionMessage } from 'openai/resources/index.mjs'
import { PROMPT_ENGINEERING } from './constant'

const OpenAIContext = createContext({} as OpenAIContextInterface)

export const useOpenAI = () => useContext(OpenAIContext)

export const OpenAIContextProvider: React.FC<OpenAIContextProviderProps> = ({
  children,
}) => {
  const [location, setLocation] = useState<{
    lat: number
    lng: number
  } | null>()
  const [openAIResponse, setOpenAIResponse] = useState<
    ChatCompletionMessage | undefined
  >()
  const [loading, setLoading] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [searchResponse, setSearchResponse] = useState({
    recommendToPlant: false,
    alreadySearch: false,
    summary: '',
  })
  const [messages, setMessages] = useState<MessagesInterface[]>([
    PROMPT_ENGINEERING,
  ])

  const router = useRouter()

  function getLocation() {
    if (typeof window === undefined) return

    const locationRaw = window.localStorage.getItem('location')
    const location = JSON.parse(locationRaw as string)

    if (!location || !location.lat || !location.lng) {
      router.replace('/map')
    }

    setLocation(location)
    return location
  }

  async function hitOpenAI(newMessages: MessagesInterface[]) {
    const openAIResponse = await OpenAIPrompt(newMessages)
    setOpenAIResponse(openAIResponse?.choices[0].message)
    return openAIResponse?.choices[0].message
  }

  async function handleGetGeneralData() {
    setLoading(true)

    const location = getLocation()

    if (openAIResponse) {
      setLoading(false)
      return openAIResponse
    }

    const response = await fetchData(`${location.lat},${location.lng}`)

    let newMessages = messages
    setMessages((prev) => {
      const message = [
        ...prev,
        {
          role: 'system' as OpenAIRole,
          content: [
            {
              type: 'text' as 'text',
              text: `Here is the data:\n${response.data}`,
            },
          ],
        },
      ]

      newMessages = message
      return message
    })

    const openAIResponseRaw = await hitOpenAI(newMessages)

    setLoading(false)

    return openAIResponseRaw
  }

  const contextValue = {
    messages,
    setMessages,
    handleGetGeneralData,
    location,
    loading,
    setLoading,
    openAIResponse,
    setOpenAIResponse,
    hitOpenAI,
    searchValue,
    setSearchValue,
    searchResponse,
    setSearchResponse,
  }

  return (
    <OpenAIContext.Provider value={contextValue}>
      {children}
    </OpenAIContext.Provider>
  )
}
