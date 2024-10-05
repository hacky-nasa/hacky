import React from 'react'
import { IconInterface } from './type'

const ReadMoreIcon = ({ width = 8, height = 8 }: IconInterface) => {
  return (
    <svg width={width} height={height} viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 0.75H6.25V2.5M5.875 1.125L4 3M3.25 1.25H1C0.801088 1.25 0.610322 1.32902 0.46967 1.46967C0.329018 1.61032 0.25 1.80109 0.25 2V6C0.25 6.19891 0.329018 6.38968 0.46967 6.53033C0.610322 6.67098 0.801088 6.75 1 6.75H5C5.19891 6.75 5.38968 6.67098 5.53033 6.53033C5.67098 6.38968 5.75 6.19891 5.75 6V3.75" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default ReadMoreIcon