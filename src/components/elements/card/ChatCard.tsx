import React from 'react'
import Markdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import { Skeleton } from '../Skeleton'

interface ChatCardProps {
  role: 'user' | 'assistant'
  text: string
  isLoading?: boolean
}

const ChatCard: React.FC<ChatCardProps> = ({
  role,
  text,
  isLoading = false,
}) => {
  return (
    <div
      className={`w-fit max-w-[75%] rounded-[10px] text-body px-[10px] py-[5px] shadow-sm 
        ${role === 'user' ? 'ml-auto text-black bg-primary-light-green' : 'text-super-white bg-primary-green'}`}
      style={{ alignSelf: role === 'user' ? 'flex-end' : 'flex-start' }}
    >
      {isLoading ? (
        <Skeleton classNames="w-20 h-3" />
      ) : (
        <Markdown
          className="text-body markdown-body break-all"
          remarkPlugins={[remarkGfm, remarkBreaks]}
        >
          {text.replaceAll(/\n/gi, '&nbsp;\n')}
        </Markdown>
      )}
    </div>
  )
}

export default ChatCard
