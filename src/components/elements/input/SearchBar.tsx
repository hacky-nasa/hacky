import React from 'react'
import { IconInterface } from '../../../../public/assets/icons/type'

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string
  icon?: React.FC<IconInterface>
  classNames?: string
}

export const SearchBar = ({
  placeholder,
  icon: Icon,
  classNames,
  ...props
}: SearchBarProps) => {
  return (
    <div
      className={`py-4 px-4 rounded-[10px] shadow-md flex items-center gap-4 bg-[#FFFFFF] w-full ${classNames}`}
    >
      {Icon && <Icon />}
      <input
        type="text"
        className="border-none w-full focus:outline-none bg-transparent"
        placeholder={placeholder}
        {...props}
      />
    </div>
  )
}
