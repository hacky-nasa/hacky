'use client'
import React, { useState } from 'react'
import { BurgerButton } from './BurgerButton'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  return (
    <nav className="w-full sm:w-[402px] fixed rounded-b-[30px] flex justify-between py-6 px-7 z-50 bg-primary-green">
      <div className="flex self-start">
        <BurgerButton isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
      <p className="text-section-header font-bold text-white">Aigree</p>
      <div className="w-8"></div>
    </nav>
  )
}

export default Navbar
