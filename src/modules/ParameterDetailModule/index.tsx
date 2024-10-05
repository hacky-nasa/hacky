'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { SearchBar } from '@/components/elements/input/SearchBar'
import SearchIcon from '../../../public/assets/icons/SearchIcon'
import { ParameterCard } from '../MainPageModule/components/ParameterCard'
import { parametersList } from './type'

export const ParameterDetailModule = () => {
  const [parameter, setParameter] = useState('')
  return (
    <section
      className={`w-full h-full pb-10 relative flex flex-col ${parameter ? 'gap-4' : 'gap-10'}`}
    >
      <div className="absolute w-full h-[340px] -z-10">
        <Image
          src="/assets/images/mainPage/backdrop.png"
          alt="backdrop"
          fill
          style={{ objectFit: 'cover', borderRadius: '50px' }}
        />
      </div>
      <div className="flex flex-col z-10 pt-24 px-5 w-full gap-2">
        <div>
          <p className="text-subheader text-white">Your Location</p>
          <p className="text-main-header text-white">Depok, Indonesia</p>
        </div>
        <div className="grid grid-cols-5 gap-[2px]">
          {parametersList.map((param) => (
            <ParameterCard
              key={param.title}
              title={param.title}
              percentage={param.percentage}
              isActive={parameter === param.title}
              onClick={() =>
                setParameter(parameter === param.title ? '' : param.title)
              }
            />
          ))}
        </div>
        {parameter && (
          <div className="bg-primary-green px-4 py-5 rounded-[10px] flex flex-col gap-[5px]">
            <p className="text-section-header text-white">Soil Moisture</p>
            <p className="text-white text-body">
              According to the data retrieved from NASA's API, the soil moisture
              level in your area is currently [moisture level]. This condition
              can significantly impact plant growth, affecting water
              availability and nutrient uptake. For optimal results, consider
              adjusting your irrigation plan or selecting plants that thrive in
              this moisture range.
            </p>
          </div>
        )}
      </div>
      <div className={`px-5 flex flex-col items-center gap-4`}>
        <div className="flex flex-col gap-2">
          <p className="text-section-header text-center">
            Recommended vegetation for Depok, Indonesia's conditions
          </p>
          <p className="text-center text-body">
            Discover the best vegetation suited for the conditions in Depok,
            Indonesia. We tailored recommendations to help you choose plants
            that thrive in your local environment..
          </p>
        </div>

        <div className="flex bg-[#E1EDDA] p-[15px] rounded-[10px] gap-4">
          <div className="w-14 h-14 aspect-square bg-primary-green rounded-[10px]" />
          <div>
            <p className="text-subheader">Plant's name</p>
            <p className="text-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            </p>
          </div>
        </div>
        <div className="flex bg-[#E1EDDA] p-[15px] rounded-[10px] gap-4">
          <div className="w-14 h-14 aspect-square bg-primary-green rounded-[10px]" />
          <div>
            <p className="text-subheader">Plant's name</p>
            <p className="text-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
