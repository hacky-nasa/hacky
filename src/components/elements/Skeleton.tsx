import React from 'react'

export const Skeleton = ({ classNames }: { classNames?: string }) => {
  return (
    <div
      className={`w-10 h-10 bg-gray-300 animate-pulse rounded-md ${classNames}`}
    ></div>
  )
}
