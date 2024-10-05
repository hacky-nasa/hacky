import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface FlashCardProps {
  type: number
  question: string
  answer: string
}

const FlashCard: React.FC<FlashCardProps> = ({ type, question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped((prev) => !prev)
  }

  return (
    <motion.button
      className="relative w-48 h-64 perspective-1000"
      onClick={handleFlip}
    >
      <motion.div
        className="relative w-full h-full transform-style-preserve-3d"
        animate={{
          rotateY: isFlipped ? 180 : 0,
        }}
        transition={{
          duration: 0.8,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
      >
        {/* Front (Question) */}
        <div
          className={`absolute w-full h-full p-5 rounded-[10px] flex flex-col justify-center items-center text-center backface-hidden ${
            type === 1 ? 'bg-primary-green text-white' : 'bg-primary-dark-blue text-white'
          }`}
          style={{
            backfaceVisibility: 'hidden',
          }}
        >
          <p className="text-lg font-bold">Question</p>
          <p className="text-base">{question}</p>
        </div>

        {/* Back (Answer) */}
        <div
          className={`absolute w-full h-full p-5 rounded-[10px] flex flex-col justify-center items-center text-center backface-hidden ${
            type === 1 ? 'bg-primary-light-green text-primary-green' : 'bg-primary-light-blue text-primary-green'
          }`}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)', // This keeps the back rotated 180° behind the front
          }}
        >
          <p className="text-lg font-bold">Answer</p>
          <p className="text-base">{answer}</p>
        </div>
      </motion.div>
    </motion.button>
  )
}

export default FlashCard
