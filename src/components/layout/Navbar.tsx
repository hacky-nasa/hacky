'use client'
import React, { useState } from 'react'
import { BurgerButton } from './BurgerButton'
import Link from 'next/link'
import AigreeIcon from '../../../public/assets/icons/AigreeIcon'
import BarnIcon from '../../../public/assets/icons/BarnIcon'
import ChartIcon from '../../../public/assets/icons/ChartIcon'
import CardIcon from '../../../public/assets/icons/CardIcon'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <nav
        className={`w-full max-w-[402px] fixed rounded-b-[30px] flex items-center justify-between py-6 px-7 z-50 
        ${isMenuOpen ? '' : 'bg-primary-green'}`}
      >
        <BurgerButton isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <Link
          href="/"
          className={`text-section-header font-bold text-white ${isMenuOpen ? 'hidden' : ''}`}
        >
          <AigreeIcon width={116} height={32} />
        </Link>
        <div className="w-8"></div>
      </nav>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      ></div>

      <div
        className={`fixed top-0 w-full max-w-[402px] bg-white z-40 transition-transform duration-300 ease-in-out pt-[107px] ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } flex items-center flex-col rounded-b-[30px] pb-8`}
      >
        <AigreeIcon width={144.14} height={33.07} stroke="#314A2A" />
        <div className="pt-[62px] w-full flex flex-col items-center gap-8">
          <Link
            href="/"
            className="flex flex-row gap-5 text-section-header text-black justify-center items-center"
            onClick={closeMenu}
          >
            <BarnIcon />
            Home
          </Link>
          <Link
            href="/map"
            className="flex flex-row gap-5 text-section-header text-black justify-center items-center"
            onClick={closeMenu}
          >
            <ChartIcon />
            Analyze
          </Link>
          <Link
            href="/qna"
            className="flex flex-row gap-5 text-section-header text-black justify-center items-center"
            onClick={closeMenu}
          >
            <CardIcon />
            Flashcards
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
