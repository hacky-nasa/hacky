'use client'

import React, { useState } from 'react'
import {
  APIProvider,
  InfoWindow,
  Map,
  MapMouseEvent,
  Marker,
} from '@vis.gl/react-google-maps'
import { useRouter } from 'next/navigation'

export const MapModule = () => {
  //   async function callOpenAI() {
  //     const response = await OpenAIPrompt([
  //       {
  //         role: 'system',
  //         content: [
  //           {
  //             type: 'text',
  //             text: `I want you to act as a farmer expert. I will give you data from today to 3 month before about the location, soil moisture, temperature, wind speed and direction, and humidity. Provide me the solution of what the best corps to plant, what I have to prepare (because natural disaster or change weather). I want you to explain to farmers, so explain as easy as possible and summary so the farmers doesn't need to read many text, you can use paragraph. The farmers maybe not know some technical definition. And if I give you what crops I want to plant, tell me whether the plant is good to grow or not`,
  //           },
  //           {
  //             type: 'text',
  //             text: `Here is the data:\n ${DATA_TEST}`,
  //           },
  //         ],
  //       },
  //       { role: 'user', content: [{ type: 'text', text: 'Strawberry' }] },
  //     ])
  //     console.log(response)
  //   }

  const [markerLatLng, setMarkerLatLng] = useState({
    lat: 0,
    lng: 0,
  })
  const [showDialog, setShowDialog] = useState(false)
  const [dialogLocation, setDialogLocation] = useState({ lat: 0, lng: 0 })

  const router = useRouter()

  function handleClick(event: MapMouseEvent) {
    setMarkerLatLng({ ...event.detail.latLng } as { lat: number; lng: number })
    setDialogLocation({ ...event.detail.latLng } as {
      lat: number
      lng: number
    })
    setShowDialog(true)
  }

  function handleSaveLocation() {
    if (typeof window === undefined) return
    const markerLatLngStringfy = JSON.stringify(markerLatLng)
    window.localStorage.setItem('location', markerLatLngStringfy)

    router.push('/main')
  }

  return (
    <APIProvider
      apiKey={'AIzaSyAcRvHJpfGRPIL18NHCyKdrmc4R0oR5Zug'}
      onLoad={() => console.log('Maps API has loaded.')}
    >
      <Map
        onClick={handleClick}
        defaultZoom={11}
        defaultCenter={{ lat: -6.267426, lng: 106.808018 }}
      >
        {showDialog && (
          <InfoWindow position={dialogLocation} className="w-[100px]">
            <button
              className="bg-primary-green text-white py-1 rounded-lg"
              onClick={handleSaveLocation}
            >
              <span className="text-body">Choose this location</span>
            </button>
          </InfoWindow>
        )}
        <Marker position={markerLatLng}></Marker>
      </Map>
    </APIProvider>
  )
}
