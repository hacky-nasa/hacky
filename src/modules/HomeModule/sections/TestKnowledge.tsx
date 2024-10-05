'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '../../../components/elements/button/Button'
import { useRouter } from 'next/navigation'

const TestKnowledge = () => {
  const router = useRouter()

  const handleNavigate = () => {
    router.push('/qna')
  }

  return (
    <div className="flex flex-col w-full relative">
      <Image
        src="/assets/home/test-bg.png"
        alt="Test Knowledge Background"
        width={402}
        height={200}
        className="z-[-1]"
      />
      <div className="flex flex-col w-full px-5 pt-5 pb-[50px] h-full absolute gap-2">
        <p className="text-main-header text-super-white">
          Test your knowledge!
        </p>
        <p className="text-body-bold text-super-white">
          Think you know how climate change impacts agriculture? Challenge
          yourself with our interactive flashcards!
        </p>
        <Button className="w-fit px-[19px] text-black" onClick={handleNavigate}>
          Let’s Play!
        </Button>
      </div>
    </div>
  )
}

export default TestKnowledge
