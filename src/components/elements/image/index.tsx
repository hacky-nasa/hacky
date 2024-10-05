import React from 'react'
import Image from 'next/image'
import { IImageWrapper } from './interface'
import { twMerge } from 'tailwind-merge'

export const ImageWrapper: React.FC<IImageWrapper> = ({
  styles,
  imgStyles,
  src,
  alt,
  ...props
}) => {
  return (
    <div className={twMerge('relative w-full h-full', styles)}>
      <Image src={src} alt={alt} fill className={imgStyles} />
    </div>
  )
}
