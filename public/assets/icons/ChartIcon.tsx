import React from 'react'
import { IconInterface } from './type'

const ChartIcon = ({ width = 31, height = 31 }: IconInterface) => {
  return (
    <svg width={width} height={height} viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_93_3324)">
    <path d="M30.97 0H0.25V30.72H30.97V0Z" fill="white" fillOpacity="0.01"/>
    <path d="M4.08984 3.83997V26.88H27.1298" stroke="black" strokeWidth="2.56" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.20996 19.2V21.76" stroke="black" strokeWidth="2.56" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.3301 14.08V21.76" stroke="black" strokeWidth="2.56" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.4502 3.83997V21.76" stroke="black" strokeWidth="2.56" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24.5703 8.95996V21.76" stroke="black" strokeWidth="2.56" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_93_3324">
    <rect width="30.72" height="30.72" fill="white" transform="translate(0.25)"/>
    </clipPath>
    </defs>
    </svg>
  )
}

export default ChartIcon