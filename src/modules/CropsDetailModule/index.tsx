'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { FilterButton } from '@/components/elements/button/FilterButton'
import { datahama } from './constant'
import { Button } from '../../components/elements/button/Button'
import AsksIcon from '../../../public/assets/icons/AsksIcon'
import { useRouter } from 'next/navigation'

export const CropsDetailModule = () => {
  const [filterCategory, setFilterCategory] = useState('Details')
  const [subFilter, setSubFilter] = useState('')

  const router = useRouter()

  const handleNavigate = () => {
    router.push('/chat')
  }

  const renderContent = () => {
    if (filterCategory === 'Details') {
      return (
        <>
          <div className="flex flex-col mx-5">
            <div className="bg-primary-green px-4 py-5 rounded-[10px] flex flex-col gap-[5px]">
              <p className="text-section-header text-white">Why?</p>
              <p className="text-white text-body">{datahama.details.why}</p>
            </div>
          </div>
          <div className="flex flex-col mx-5">
            <div className="bg-primary-green px-4 py-5 rounded-[10px] flex flex-col gap-[5px]">
              <p className="text-section-header text-white">When?</p>
              <p className="text-white text-body">{datahama.details.when}</p>
            </div>
          </div>
        </>
      )
    }

    const currentData =
      filterCategory === 'Pests' ? datahama.pests : datahama.weeds
    const selectedItem = currentData.find((item) => item.name === subFilter)

    if (selectedItem) {
      return selectedItem.data.map((item, index) => (
        <div key={index} className="flex flex-col mx-5">
          <div className="bg-primary-green px-4 py-5 rounded-[10px] flex flex-col gap-[5px]">
            <p className="text-section-header text-white">{item.name}</p>
            <p className="text-white text-body">{item.description}</p>
          </div>
        </div>
      ))
    } else {
      return (
        <div className="flex flex-col mx-5 items-center">
          <p className="text-section-header text-primary-green">
            Select a {filterCategory.toLowerCase()}
          </p>
          <p className="text-primary-green text-body">
            Select a {filterCategory.toLowerCase()} to view more information.
          </p>
        </div>
      )
    }
  }

  return (
    <section className="w-full h-full pb-10 relative flex flex-col gap-10">
      <div className="absolute w-full h-[270px] -z-10">
        <Image
          src="/assets/images/CropsDetailPage/backdrop.png"
          alt="backdrop"
          fill
          style={{ objectFit: 'cover', borderRadius: '50px' }}
        />
      </div>
      <div className="flex flex-col z-10 pt-24 px-5 w-full gap-2 text-white">
        <p className="text-main-header">Strawberry</p>
        <hr className="w-3/12" />
        <p className="text-section-header">
          It’s not the right time to grow strawberries right now.
        </p>
        <p className="text-body">
          Based on the analysis of your geographical conditions, the current
          climate isn't ideal for growing strawberries.{' '}
        </p>
      </div>
      <section className="flex flex-col gap-3">
        <div className="px-5 flex items-center gap-2">
          <FilterButton
            onClick={() => setFilterCategory('Details')}
            isActive={filterCategory == 'Details'}
          >
            Details
          </FilterButton>
          <FilterButton
            onClick={() => setFilterCategory('Pests')}
            isActive={filterCategory == 'Pests'}
          >
            Pests
          </FilterButton>
          <FilterButton
            onClick={() => setFilterCategory('Weeds')}
            isActive={filterCategory == 'Weeds'}
          >
            Weeds
          </FilterButton>
        </div>
        {filterCategory != 'Details' && (
          <>
            <hr className="w-11/12 mx-auto" />
            <div className="px-5 flex items-center gap-2">
              {filterCategory == 'Pests' &&
                datahama.pests.map((item: any) => (
                  <FilterButton
                    onClick={() => setSubFilter(item.name)}
                    isActive={subFilter == item.name}
                  >
                    {item.name}
                  </FilterButton>
                ))}
              {filterCategory == 'Weeds' &&
                datahama.weeds.map((item: any) => (
                  <FilterButton
                    onClick={() => setSubFilter(item.name)}
                    isActive={subFilter == item.name}
                  >
                    {item.name}
                  </FilterButton>
                ))}
            </div>
          </>
        )}
        <div className="flex flex-col gap-2 pt-2">{renderContent()}</div>
      </section>
      <Button
        rightIcon={AsksIcon}
        className="shadow-lg px-5 py-[7.2px] absolute bottom-8 right-8"
        onClick={handleNavigate}
      >
        Ask More
      </Button>
    </section>
  )
}
