"use client"

import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { tv, VariantProps } from 'tailwind-variants'
import { IconInterface } from '../../../../public/assets/icons/type'

const style = tv({
  base: 'py-2 bg-[#E1EDDA] rounded-3xl flex items-center gap-2 hover:bg-[#314A2A] hover:text-[#FEFEFE] drop-shadow-button',
  variants: {
    size: {
      lg: 'px-16',
      md: 'px-4',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof style> {
  asChild?: boolean
  leftIcon?: React.FC<IconInterface>
  rightIcon?: React.FC<IconInterface>
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      asChild = false,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <button ref={ref} {...props} className={twMerge(style(props), className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
        {LeftIcon && <LeftIcon stroke={isHovered ? "white" : "black"}/>}
        <span className="text-body">{props.children}</span>
        {RightIcon && <RightIcon stroke={isHovered ? "white" : "black"}/>}
      </button>
    )
  }
)
