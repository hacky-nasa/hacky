import React from 'react'
import LocationIcon from '../../../../public/assets/icons/SearchIcon'
import { IconInterface } from '../../../../public/assets/icons/type'

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string
  icon?: React.FC<IconInterface>
}

export const SearchBar = ({
  placeholder,
  icon: Icon,
  ...props
}: SearchBarProps) => {
  return (
    <div
      className="py-4 px-4 rounded-lg shadow-md flex items-center gap-4"
      {...props}
    >
      {Icon && <Icon />}
      <input
        type="text"
        className="border-none w-full focus:outline-none"
        placeholder={placeholder}
      />
    </div>
  )
}
