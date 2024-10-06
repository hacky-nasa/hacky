'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FilterButton } from '@/components/elements/button/FilterButton'
import { useOpenAI } from '../../../components/contexts/OpenAI'
import { useRouter } from 'next/navigation'
import { Button } from '../../../components/elements/button/Button'
import AsksIcon from '../../../../public/assets/icons/AsksIcon'
import Link from 'next/link'

export const CropsDetailModule = () => {
  const [filterCategory, setFilterCategory] = useState('Details')
  const [subFilter, setSubFilter] = useState(0)
  const [response, setResponse] = useState<any>()

  const { searchValue, searchResponse, openAIResponse } = useOpenAI()

  const router = useRouter()

  console.log(response)

  useEffect(() => {
    const responseRaw = openAIResponse

    if (!responseRaw || !responseRaw?.content) {
      return router.replace('/detail')
    }

    const response = JSON.parse(responseRaw?.content as string)
    setResponse(response)
  }, [])

  const renderContent = () => {
    if (filterCategory === 'Details') {
      return (
        <>
          <div className="flex flex-col mx-5">
            <div className="bg-primary-green px-4 py-5 rounded-[10px] flex flex-col gap-[5px]">
              <p className="text-section-header text-white">Why?</p>
              <p className="text-white text-body">
                {response?.MyCropsExplanation?.details?.why}
              </p>
            </div>
          </div>
          <div className="flex flex-col mx-5">
            <div className="bg-primary-green px-4 py-5 rounded-[10px] flex flex-col gap-[5px]">
              <p className="text-section-header text-white">When?</p>
              <p className="text-white text-body">
                {response?.MyCropsExplanation?.details?.when}
              </p>
            </div>
          </div>
        </>
      )
    }

    const currentData =
      filterCategory === 'Pests'
        ? response?.MyCropsExplanation?.pests
        : response?.MyCropsExplanation?.weeds
    const selectedItem = currentData[subFilter]

    if (selectedItem) {
      return (
        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-col mx-5">
            <div className="bg-primary-green px-4 py-5 rounded-[10px] flex flex-col gap-[5px]">
              <p className="text-section-header text-white">
                {filterCategory === 'Pests'
                  ? selectedItem?.pestsName
                  : selectedItem?.weedsName}
              </p>
              <p className="text-white text-body">
                {selectedItem?.explanation}
              </p>
            </div>
          </div>
          <div className="flex flex-col mx-5">
            <div className="bg-primary-green px-4 py-5 rounded-[10px] flex flex-col gap-[5px]">
              <p className="text-section-header text-white">
                Impact of Environmental Conditions
              </p>
              <p className="text-white text-body">
                {selectedItem?.impactOfEnvironmentalConditions}
              </p>
            </div>
          </div>
          <div className="flex flex-col mx-5">
            <div className="bg-primary-green px-4 py-5 rounded-[10px] flex flex-col gap-[5px]">
              <p className="text-section-header text-white">
                Prevention and Early Detection
              </p>
              <p className="text-white text-body">
                {selectedItem?.preventionAndEarlyDetection}
              </p>
            </div>
          </div>
        </div>
      )
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
        <p className="text-main-header">{searchValue}</p>
        <hr className="w-3/12" />
        <p className="text-section-header">
          {searchResponse.recommendToPlant
            ? `Now is the right time to grow ${searchValue}.`
            : `It's not the right time to grow ${searchValue} right now.`}
        </p>
        <p className="text-body">
          Based on the analysis of your geographical conditions, the current
          climate is{!searchResponse.recommendToPlant && `n't`} ideal for
          growing strawberries.
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
                response?.MyCropsExplanation?.pests?.map(
                  (_: any, index: number) => (
                    <FilterButton
                      onClick={() => setSubFilter(index)}
                      isActive={subFilter == index}
                    >
                      Pest {index}
                    </FilterButton>
                  )
                )}
              {filterCategory == 'Weeds' &&
                response?.MyCropsExplanation?.weeds?.map(
                  (_: any, index: number) => (
                    <FilterButton
                      onClick={() => setSubFilter(index)}
                      isActive={subFilter == index}
                    >
                      Weed {index}
                    </FilterButton>
                  )
                )}
            </div>
          </>
        )}
        <div className="flex flex-col gap-2 pt-2">{renderContent()}</div>
      </section>
      <Link href={'/chat'}>
        <Button
          rightIcon={AsksIcon}
          className="shadow-lg px-5 py-[7.2px] absolute bottom-8 right-8"
        >
          Ask More
        </Button>
      </Link>
    </section>
  )
}
