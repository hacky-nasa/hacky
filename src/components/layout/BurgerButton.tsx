import React from 'react'

interface BurgerNavbarProps {
  isOpen: boolean
  toggleMenu: () => void
}

export const BurgerButton: React.FC<BurgerNavbarProps> = ({
  isOpen,
  toggleMenu,
}) => {
  return (
    <button
      onClick={toggleMenu}
      className={`flex flex-col justify-center items-center w-8 gap-2 z-50`}
    >
      <span
        className={`w-full h-[4px] transition-transform duration-300 ${isOpen ? 'transform rotate-45 translate-y-[12px] bg-primary-green' : 'bg-white'}`}
      ></span>
      <span
        className={`w-full h-[4px] transition-opacity duration-300 ${isOpen ? 'opacity-0 bg-primary-green' : 'opacity-100 bg-white'}`}
      ></span>
      <span
        className={`w-full h-[4px] transition-transform duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-[12px] bg-primary-green' : 'bg-white'}`}
      ></span>
    </button>
  )
}
