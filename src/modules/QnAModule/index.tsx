'use client'
import React from 'react'
import Image from 'next/image'
import FlashCard from '@/components/elements/card/FlashCard'

const flashcards = [
  {
    id: 1,
    question:
      'What soil condition can cause plants to wilt even when there is moisture present, but roots can’t absorb it due to extremely dry conditions?',
    answer: 'Permanent Wilting Point',
  },
  {
    id: 2,
    question:
      'Which temperature range is ideal for growing most warm-season crops like tomatoes and peppers?',
    answer: '21°C to 29°C (70°F to 85°F)',
  },
  {
    id: 3,
    question:
      'What soil moisture level is considered optimal for most crops to thrive, ensuring both proper hydration and oxygen supply to roots?',
    answer: 'Field Capacity',
  },
  {
    id: 4,
    question:
      'Which wind condition can increase evaporation and lead to moisture stress in crops, especially in dry areas?',
    answer: 'High Wind Speed',
  },
  {
    id: 5,
    question:
      'If wind consistently comes from the east in a region, how might this impact the spread of pests and seeds in your crops?',
    answer:
      'It may carry pests or weed seeds across fields, affecting crop health.',
  },
  {
    id: 6,
    question:
      'What temperature range can cause frost damage to crops, especially in the early morning hours?',
    answer: 'Below 0°C (32°F)',
  },
  {
    id: 7,
    question:
      'What wind direction should farmers monitor when planning pesticide spraying to prevent drift onto neighboring crops?',
    answer: 'Downwind Direction',
  },
  {
    id: 8,
    question:
      'When humidity is high, what condition can increase the risk of fungal diseases in crops like tomatoes and cucumbers?',
    answer: 'Prolonged Moisture on Leaves',
  },
  {
    id: 9,
    question:
      'Which weather condition, characterized by warm temperatures and high soil moisture, can lead to rapid weed growth?',
    answer: 'Humid and Rainy Conditions',
  },
  {
    id: 10,
    question:
      'How does low humidity affect irrigation needs for crops, especially in arid regions?',
    answer:
      'It increases water evaporation, requiring more frequent irrigation.',
  },
]

const QnAModule = () => {
  return (
    <div className="relative w-full h-screen bg-black bg-opacity-40 overflow-hidden">
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/assets/qna/qna-bg.png"
          alt="Hero Landing Page Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className="flex flex-col gap-4 px-5">
          <p className="text-white text-section-header">
            Explore geographical aspects with our engaging and informative
            flashcards.
          </p>
          <p className="text-white text-body">
            Tap to reveal the answer, and swipe to explore more flashcards.
          </p>
        </div>

        <div className="w-full px-4 flex gap-6 overflow-x-scroll snap-x snap-mandatory custom-scrollbar-hidden py-5">
          {flashcards.map((flashcard) => (
            <div key={flashcard.id} className="snap-center">
              <FlashCard
                type={flashcard.id % 2 === 0 ? 2 : 1}
                question={flashcard.question}
                answer={flashcard.answer}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default QnAModule
