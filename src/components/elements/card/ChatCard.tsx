import React from 'react'
import Markdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'

interface ChatCardProps {
  role: string
  text: string
}

const ChatCard: React.FC<ChatCardProps> = ({ role, text }) => {
  return (
    <div
      className={`w-fit max-w-[75%] rounded-[10px] text-body px-[10px] py-[5px] shadow-sm 
        ${role === 'user' ? 'ml-auto text-black bg-primary-light-green' : 'text-super-white bg-primary-green'}`}
      style={{ alignSelf: role === 'user' ? 'flex-end' : 'flex-start' }}
    >
      <Markdown
        className="text-body markdown-body"
        remarkPlugins={[remarkGfm, remarkBreaks]}
      >
        {text.replaceAll(/\n/gi, '&nbsp; \n')}
      </Markdown>
    </div>
  )
}

export default ChatCard
