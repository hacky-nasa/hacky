import React from 'react'
import { IconInterface } from './type'

const SendIcon = ({ width = 12, height = 12 }: IconInterface) => {
  return (
    <svg width={width} height={height} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.6441 4.5849L3.8491 1.5349C2.4741 0.809901 0.979096 2.2749 1.6741 3.6649L2.4841 5.2849C2.7091 5.7349 2.7091 6.2649 2.4841 6.7149L1.6741 8.3349C0.979096 9.7249 2.4741 11.1849 3.8491 10.4649L9.6441 7.4149C10.7841 6.8149 10.7841 5.1849 9.6441 4.5849Z" stroke="#888888" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default SendIcon