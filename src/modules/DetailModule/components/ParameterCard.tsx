import React from 'react'
import { IconInterface } from '../../../../public/assets/icons/type'
import { Skeleton } from '../../../components/elements/Skeleton'

interface ParameterCardProps {
  title?: string
  percentage?: string
  isActive?: boolean
  icon?: React.FC<IconInterface>
  onClick?: () => void
  loading?: boolean
}

export const ParameterCard = ({
  title,
  percentage,
  isActive,
  onClick,
  icon: Icon,
  loading = false,
}: ParameterCardProps) => {
  return (
    <div
      className={`py-10 px-1 flex flex-col items-center rounded-[10px] gap-2 cursor-pointer ${isActive ? 'bg-primary-green text-white' : 'bg-white'}`}
      onClick={onClick}
    >
      {Icon && <Icon stroke={isActive ? 'white' : 'black'} />}
      <div className="flex items-center flex-col">
        <p className="text-caption-bold">{title}</p>
        {loading ? (
          <Skeleton classNames="w-10 h-3" />
        ) : (
          <p className="text-caption text-center">{percentage}</p>
        )}
      </div>
    </div>
  )
}
