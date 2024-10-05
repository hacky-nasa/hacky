'use client'

import React, { useState } from 'react'
import ChatCard from '@/components/elements/card/ChatCard'
import SendIcon from '../../../public/assets/icons/SendIcon'

const ChatModule = () => {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hello! How can I assist you today?' },
  ])

  const handleSendMessage = () => {
    if (input.trim() === '') return

    const newMessage = { role: 'user', text: input }
    setMessages((prevMessages) => [...prevMessages, newMessage])
    setInput('')
  }

  return (
    <div className="flex flex-col h-screen justify-between pb-[50px] px-5 pt-24">
      <div className="flex-1 overflow-y-auto mb-4 space-y-3 custom-scrollbar">
        {messages.map((message, index) => (
          <ChatCard key={index} role={message.role} text={message.text} />
        ))}
      </div>

      <div className="flex items-center gap-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-5 py-[5px] bg-super-white shadow-lg rounded-[20px] focus:outline-none placeholder:text-light-grey"
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
