'use client'

import React, { useEffect, useState } from 'react'
import ChatCard from '@/components/elements/card/ChatCard'
import SendIcon from '../../../public/assets/icons/SendIcon'
import { useOpenAI } from '../../components/contexts/OpenAI'
import { MessagesInterface } from '../../components/contexts/OpenAI/interface'
import { useRouter } from 'next/navigation'

interface MessageProps {
  role: 'user' | 'assistant'
  content: string
}

const ChatModule = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [input, setInput] = useState('')
  const [chat, setChat] = useState<MessageProps[]>([])

  const { setMessages, hitOpenAI, openAIResponse, setOpenAIResponse } =
    useOpenAI()
  const router = useRouter()

  const handleSendMessage = async () => {
    setIsLoading(true)

    if (input.trim() === '') return

    const newMessagePrompt: MessageProps = {
      role: 'user',
      content: `I want to ask about another context, it will be delimited by triple quotes, answer this in anotherContext.\n\n"""${input}"""`,
    }
    const newMessage: MessageProps = {
      role: 'user',
      content: input,
    }
    setChat((prevChat) => [...prevChat, newMessage])

    let allNewMessages: MessagesInterface[] = []
    setMessages((prev) => {
      const message = [...prev, newMessagePrompt]
      allNewMessages = message
      return message
    })
    setInput('')

    const responseRaw = await hitOpenAI(allNewMessages)
    const response = JSON.parse(responseRaw?.content as string)
    setOpenAIResponse(response)
    setMessages((prev) => [
      ...prev,
      { role: 'assistant', content: response?.anotherContext },
    ])
    setChat((prev) => [
      ...prev,
      { role: 'assistant', content: response?.anotherContext },
    ])

    setIsLoading(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSendMessage()
    }
  }

  useEffect(() => {
    const responseRaw = openAIResponse

    if (!responseRaw || !responseRaw?.content) {
      router.replace('/detail')
      return
    }
  }, [])

  return (
    <div className="flex flex-col h-screen justify-between pb-[50px] px-5 pt-24">
      <div className="flex-1 overflow-y-auto mb-4 space-y-3 custom-scrollbar-hidden">
        <ChatCard
          role={'assistant'}
          text={'Hello! How can I assist you today?'}
        />
        {chat.map((message, index) => (
          <ChatCard key={index} role={message.role} text={message.content} />
        ))}
        {isLoading && (
          <ChatCard role={'assistant'} text={''} isLoading={isLoading} />
        )}
      </div>

      <div className="flex items-center gap-4 w-full">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="w-full px-5 py-[5px] bg-super-white shadow-lg rounded-[20px] focus:outline-none placeholder:text-light-grey"
        />
        <button
          onClick={handleSendMessage}
          className="bg-super-white p-3 rounded-full shadow-lg hover:scale-110"
        >
          <SendIcon />
        </button>
      </div>
    </div>
  )
}

export default ChatModule
