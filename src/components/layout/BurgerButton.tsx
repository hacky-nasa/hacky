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
    <div className="">
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-center items-center w-8 h-8 gap-2 z-50"
      >
        <span
          className={`w-full h-[4px] bg-white transition-transform duration-300 ${isOpen ? 'transform rotate-45 translate-y-[12px]' : ''}`}
        ></span>
        <span
          className={`w-full h-[4px] bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
        ></span>
        <span
          className={`w-full h-[4px] bg-white transition-transform duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-[12px]' : ''}`}
        ></span>
      </button>
    </div>
  )
}
