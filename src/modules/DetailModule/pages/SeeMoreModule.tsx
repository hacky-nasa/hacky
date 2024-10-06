'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useOpenAI } from '../../../components/contexts/OpenAI'
import { ParameterCard } from '../components/ParameterCard'
import HumidityIcon from '../../../../public/assets/icons/HumidityIcon'
import SoilIcon from '../../../../public/assets/icons/SoilIcon'
import TemperatureIcon from '../../../../public/assets/icons/TemperatureIcon'
import WindDirectionIcon from '../../../../public/assets/icons/WindDirection'
import WindSpeedIcon from '../../../../public/assets/icons/WindSpeedIcon'
import { useRouter } from 'next/navigation'

export const SeeMoreModule = () => {
  const { location, openAIResponse, loading } = useOpenAI()
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)
  const [parameter, setParameter] = useState('')
  const [response, setResponse] = useState<any>()
  const [parameterData, setParameterData] = useState([
    {
      title: 'Temperature',
      percentage: '',
      icon: TemperatureIcon,
      summary: '',
    },
    {
      title: 'Soil Moisture',
      percentage: '',
      icon: SoilIcon,
      summary: '',
    },
    {
      title: 'Wind Speed',
      percentage: '',
      icon: WindSpeedIcon,
      summary: '',
    },
    {
      title: 'Wind Direction',
      percentage: '',
      icon: WindDirectionIcon,
      summary: '',
    },
    {
      title: 'Humidity',
      percentage: '',
      icon: HumidityIcon,
      summary: '',
    },
  ])

  useEffect(() => {
    setIsLoading(true)

    const responseRaw = openAIResponse

    if (!responseRaw || !responseRaw?.content) {
      return router.replace('/detail')
    }

    const response = JSON.parse(responseRaw?.content as string)
    setResponse(response)
    setParameterData([
      {
        title: 'Temperature',
        percentage: response?.parameterExplanation?.temperature?.index,
        icon: TemperatureIcon,
        summary: response?.parameterExplanation?.temperature?.summary,
      },
      {
        title: 'Soil Moisture',
        percentage: response?.parameterExplanation?.soilMoisture?.index,
        icon: SoilIcon,
        summary: response?.parameterExplanation?.soilMoisture?.summary,
      },
      {
        title: 'Wind Speed',
        percentage: response?.parameterExplanation?.windSpeed?.index,
        icon: WindSpeedIcon,
        summary: response?.parameterExplanation?.windSpeed?.summary,
      },
      {
        title: 'Wind Direction',
        percentage: response?.parameterExplanation?.windDirection?.index,
        icon: WindDirectionIcon,
        summary: response?.parameterExplanation?.windDirection?.summary,
      },
      {
        title: 'Humidity',
        percentage: response?.parameterExplanation?.humidity?.index,
        icon: HumidityIcon,
        summary: response?.parameterExplanation?.humidity?.summary,
      },
    ])

    setIsLoading(false)
  }, [])

  return (
    <section
      className={`w-full h-full pb-10 relative flex flex-col ${parameter ? 'gap-4' : 'gap-10'}`}
    >
      <div className="absolute w-full h-[370px] -z-10">
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
              isActive={parameter === param.title}
              onClick={() =>
                setParameter(parameter === param.title ? '' : param.title)
              }
              loading={loading || isLoading}
            />
          ))}
        </div>
        <div>
          {parameterData.map((param, index) => (
            <React.Fragment key={index}>
              {parameter === param.title && (
                <div className="bg-primary-green px-4 py-5 rounded-[10px] flex flex-col gap-[5px]">
                  <p className="text-section-header text-white">
                    {param.title}
                  </p>
                  <p className="text-white text-body">{param.summary}</p>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className={`px-5 flex flex-col items-center gap-4`}>
        <div className="flex flex-col gap-2">
          <p className="text-section-header text-center">
            Recommended vegetation for selected location conditions
          </p>
          <p className="text-center text-body">
            Discover the best vegetation suited for the conditions in selected
            location. We tailored recommendations to help you choose plants that
            thrive in your local environment.
          </p>
        </div>

        {response?.bestCropsToPlant &&
          response?.bestCropsToPlant?.map((value: any) => (
            <div className="flex bg-[#E1EDDA] p-[15px] rounded-[10px] gap-4">
              <div className="w-14 h-14 aspect-square bg-primary-green rounded-[10px]" />
              <div>
                <p className="text-subheader">{value?.plantName}</p>
                <p className="text-body">{value?.explanation}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}
