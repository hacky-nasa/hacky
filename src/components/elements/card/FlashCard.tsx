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
        <div
          className={`absolute w-full h-full p-5 rounded-[10px] flex flex-col justify-center items-center text-center backface-hidden gap-2 ${
            type === 1
              ? 'bg-primary-green text-white'
              : 'bg-primary-dark-blue text-white'
          }`}
          style={{
            backfaceVisibility: 'hidden',
          }}
        >
          <p className="text-main-header">Question</p>
          <p className="text-body-bold">{question}</p>
        </div>

        <div
          className={`absolute w-full h-full p-5 rounded-[10px] flex flex-col justify-center items-center text-center backface-hidden gap-2 ${
            type === 1
              ? 'bg-primary-light-green text-primary-green'
              : 'bg-primary-light-blue text-primary-green'
          }`}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <p className="text-main-header">Answer</p>
          <p className="text-body-bold">{answer}</p>
        </div>
      </motion.div>
    </motion.button>
  )
}

export default FlashCard
