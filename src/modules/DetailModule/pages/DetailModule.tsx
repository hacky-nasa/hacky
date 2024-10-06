'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { ParameterCard } from '../components/ParameterCard'
import { useOpenAI } from '../../../components/contexts/OpenAI'
import { Button } from '../../../components/elements/button/Button'
import Link from 'next/link'
import { SearchBar } from '../../../components/elements/input/SearchBar'
import SearchIcon from '../../../../public/assets/icons/SearchIcon'
import HumidityIcon from '../../../../public/assets/icons/HumidityIcon'
import SoilIcon from '../../../../public/assets/icons/SoilIcon'
import TemperatureIcon from '../../../../public/assets/icons/TemperatureIcon'
import WindDirectionIcon from '../../../../public/assets/icons/WindDirection'
import WindSpeedIcon from '../../../../public/assets/icons/WindSpeedIcon'
import { OpenAIRole } from '../../../components/contexts/OpenAI/interface'
import { Skeleton } from '../../../components/elements/Skeleton'

export const DetailModule = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [parameterData, setParameterData] = useState([
    {
      title: 'Temperature',
      percentage: '',
      icon: TemperatureIcon,
    },
    {
      title: 'Soil Moisture',
      percentage: '',
      icon: SoilIcon,
    },
    {
      title: 'Wind Speed',
      percentage: '',
      icon: WindSpeedIcon,
    },
    {
      title: 'Wind Direction',
      percentage: '',
      icon: WindDirectionIcon,
    },
    {
      title: 'Humidity',
      percentage: '',
      icon: HumidityIcon,
    },
  ])

  const {
    handleGetGeneralData,
    loading,
    messages,
    setMessages,
    location,
    hitOpenAI,
    searchValue,
    setSearchValue,
    searchResponse,
    setSearchResponse,
  } = useOpenAI()

  async function handleSearch() {
    setIsLoading(true)

    let newMessages = messages
    setMessages((prev) => {
      const message = [
        ...prev,
        {
          role: 'user' as OpenAIRole,
          content: [
            {
              type: 'text' as 'text',
              text: `Analyze the suitability of planting ${searchValue} based on the provided data`,
            },
          ],
        },
      ]

      newMessages = message
      return message
    })

    const responseRaw = await hitOpenAI(newMessages)
    const response = JSON.parse(responseRaw?.content as string)
    setParameterData([
      {
        title: 'Temperature',
        percentage: response?.parameterExplanation?.temperature?.index,
        icon: TemperatureIcon,
      },
      {
        title: 'Soil Moisture',
        percentage: response?.parameterExplanation?.soilMoisture?.index,
        icon: SoilIcon,
      },
      {
        title: 'Wind Speed',
        percentage: response?.parameterExplanation?.windSpeed?.index,
        icon: WindSpeedIcon,
      },
      {
        title: 'Wind Direction',
        percentage: response?.parameterExplanation?.windDirection?.index,
        icon: WindDirectionIcon,
      },
      {
        title: 'Humidity',
        percentage: response?.parameterExplanation?.humidity?.index,
        icon: HumidityIcon,
      },
    ])
    setSearchResponse({
      recommendToPlant: response?.MyCropsExplanation?.recommendToPlant,
      alreadySearch: true,
      summary: response?.MyCropsExplanation?.summary,
    })

    setIsLoading(false)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSearch()
    }
  }

  async function getDataFirstTime() {
    setIsLoading(true)

    const responseRaw = await handleGetGeneralData()

    const response = JSON.parse(responseRaw?.content as string)
    setParameterData([
      {
        title: 'Temperature',
        percentage: response?.parameterExplanation?.temperature?.index,
        icon: TemperatureIcon,
      },
      {
        title: 'Soil Moisture',
        percentage: response?.parameterExplanation?.soilMoisture?.index,
        icon: SoilIcon,
      },
      {
        title: 'Wind Speed',
        percentage: response?.parameterExplanation?.windSpeed?.index,
        icon: WindSpeedIcon,
      },
      {
        title: 'Wind Direction',
        percentage: response?.parameterExplanation?.windDirection?.index,
        icon: WindDirectionIcon,
      },
      {
        title: 'Humidity',
        percentage: response?.parameterExplanation?.humidity?.index,
        icon: HumidityIcon,
      },
    ])

    setIsLoading(false)
  }

  useEffect(() => {
    getDataFirstTime()
  }, [])

  return (
    <section className={`w-full h-full pb-10 relative flex flex-col gap-10`}>
      <div className="absolute w-full h-[414px] -z-10">
        <Image
          src="/assets/images/mainPage/backdrop.png"
          alt="backdrop"
          fill
          style={{ objectFit: 'cover', borderRadius: '50px' }}
        />
      </div>
      <div className="flex flex-col z-10 pt-24 px-5 w-full gap-3">
        <div>
          <p className="text-subheader text-white">Your Location</p>
          <p className="text-main-header text-white">Lat: {location?.lat}</p>
          <p className="text-main-header text-white">Lng: {location?.lng}</p>
        </div>
        <div className="grid grid-cols-5 gap-[2px]">
          {parameterData.map((param) => (
            <ParameterCard
              key={param.title}
              title={param.title}
              percentage={param.percentage}
              icon={param.icon}
              loading={loading || isLoading}
            />
          ))}
        </div>
        {loading || isLoading ? (
          <Skeleton classNames="mx-auto w-20 h-8" />
        ) : (
          <Link href={'/detail/see-more'} className="mx-auto">
            <Button>Learn More</Button>
          </Link>
        )}
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
        <SearchBar
          icon={SearchIcon}
          placeholder="Search a plant"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div className="w-full bg-primary-green px-4 py-5 rounded-[10px] flex flex-col gap-[5px]">
          {loading || isLoading ? (
            <Skeleton classNames="w-full" />
          ) : (
            <p className="text-section-header text-white">
              {!searchResponse.alreadySearch
                ? `You haven't entered a plant name yet.`
                : searchResponse.recommendToPlant
                  ? `Now is the right time to grow ${searchValue}.`
                  : `It's not the right time to grow ${searchValue} right now.`}
            </p>
          )}
          {loading || isLoading ? (
            <>
              <Skeleton classNames="w-3/4 h-2" />
              <Skeleton classNames="w-3/4 h-2" />
              <Skeleton classNames="w-3/4 h-2" />
            </>
          ) : (
            <p className="text-white text-body">
              {!searchResponse.alreadySearch
                ? `Enter a plant name to receive an analysis based on your location's geographical conditions, along with predictions for pest identification and weed detection.`
                : searchResponse.summary}
            </p>
          )}
          {searchResponse.alreadySearch && (
            <Link href={'/detail/crops'} className="pt-2">
              <Button>Learn More</Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
