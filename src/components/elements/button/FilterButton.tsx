import React from 'react'
import { twMerge } from 'tailwind-merge'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  isActive?: boolean
}

export const FilterButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, isActive, asChild = false, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={twMerge(
          `py-1 rounded-[10px] flex items-center gap-2 hover:bg-[#314A2A]  hover:text-[#FEFEFE] px-5 ${isActive ? 'bg-primary-green text-white' : 'bg-[#E1EDDA]'}`,
          className
        )}
      >
        <span className={`text-body `}>{props.children}</span>
      </button>
    )
  }
)
