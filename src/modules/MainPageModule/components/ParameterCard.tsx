import React from 'react'

interface ParameterCardProps {
  title?: string
  percentage?: number
  isActive?: boolean
  onClick?: () => void
}

export const ParameterCard = ({
  title,
  percentage,
  isActive,
  onClick,
}: ParameterCardProps) => {
  return (
    <div
      className={`py-10 px-1 flex flex-col items-center rounded-[10px] gap-2 cursor-pointer ${isActive ? 'bg-primary-green text-white' : 'bg-white'}`}
      onClick={onClick}
    >
      <div className="bg-green-900 w-10 aspect-square" />
      <div className="flex items-center flex-col">
        <p className="text-caption-bold">{title}</p>
        <p className="text-caption">{percentage}%</p>
      </div>
    </div>
  )
}
