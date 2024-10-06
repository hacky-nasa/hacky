'use client'

import React from 'react'
import Image from 'next/image'
import { SearchBar } from '@/components/elements/input/SearchBar'
import SearchIcon from '../../../public/assets/icons/SearchIcon'
import { ParameterCard } from './components/ParameterCard'
import Link from 'next/link'
import { Button } from '@/components/elements/button/Button'
import { parametersList } from '../ParameterDetailModule/type'

export const MainPageModule = () => {
  return (
    <section className="w-full h-full pb-10 relative flex flex-col gap-7">
      <div className="absolute w-full h-[335px] -z-10">
        <Image
          src="/assets/images/mainPage/backdrop.png"
          alt="backdrop"
          fill
          style={{ objectFit: 'cover', borderRadius: '50px' }}
        />
      </div>
      <div className="flex flex-col z-10 pt-24 px-5 w-full gap-2">
        <Link href={'/map'} className="cursor-pointer">
          <SearchBar icon={SearchIcon} placeholder="Choose a location" />
        </Link>
        <div className="flex flex-col items-center gap-3">
          <div className="grid grid-cols-5 w-full gap-[2px]">
            {parametersList.map((param) => (
              <ParameterCard
                key={param.title}
                title={param.title}
                percentage={param.percentage}
                icon={param.icon}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="px-5 flex flex-col items-center gap-4">
        <div className="flex flex-col gap-2 pt-2">
          <p className="text-section-header text-center">
            Curious if the plants you want to grow are a good fit?
          </p>
          <p className="text-center text-body">
            This feature analyzes your geographical conditions and offers pest
            identification and weed detection insights to help you grow
            successfully.
          </p>
        </div>
        <Link href={'/map'}>
          <Button>Choose Location</Button>
        </Link>
      </div>
    </section>
  )
}
