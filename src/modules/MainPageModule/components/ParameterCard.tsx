import React from 'react'
import { IconInterface } from '../../../../public/assets/icons/type'

interface ParameterCardProps {
  title?: string
  percentage?: number
  isActive?: boolean
  icon?: React.FC<IconInterface>
  onClick?: () => void
}

export const ParameterCard = ({
  title,
  percentage,
  isActive,
  onClick,
  icon: Icon,
}: ParameterCardProps) => {
  return (
    <div
      className={`py-10 px-1 flex flex-col items-center rounded-[10px] gap-2 cursor-pointer ${isActive ? 'bg-primary-green text-white' : 'bg-white'}`}
      onClick={onClick}
    >
      {/* <div className="bg-green-900 w-10 aspect-square" /> */}
      {Icon && <Icon stroke={isActive ? "white" : "black"}/>}
      <div className="flex items-center flex-col">
        <p className="text-caption-bold">{title}</p>
        <p className="text-caption">{percentage}%</p>
      </div>
    </div>
  )
}
