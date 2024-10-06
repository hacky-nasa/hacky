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
import { useOpenAI } from '../../components/contexts/OpenAI'

export const MapModule = () => {
  const [markerLatLng, setMarkerLatLng] = useState({
    lat: 0,
    lng: 0,
  })
  const [showDialog, setShowDialog] = useState(false)
  const [dialogLocation, setDialogLocation] = useState({ lat: 0, lng: 0 })

  const { setOpenAIResponse } = useOpenAI()
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

    setOpenAIResponse(undefined)
    router.push('/detail')
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
