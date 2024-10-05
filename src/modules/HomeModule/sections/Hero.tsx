import React from 'react'
import Image from 'next/image'
import { Button } from '../../../components/elements/button/Button'
import PlantIcon from '../../../../public/assets/icons/PlantIcon'
import AigreeIcon from '../../../../public/assets/icons/AigreeIcon';

const Hero = () => {
  return (
    <div className="flex flex-col w-full relative">
      <Image
        src="/assets/home/hero-bg.png"
        alt="Hero Landing Page Background"
        width={402}
        height={478}
        className="z-[-1]"
      />
      <div className="flex flex-col items-center justify-between w-full px-5 h-full absolute py-[30px]">
        <div className="flex flex-col gap-3 items-center">
          <AigreeIcon />
          <p className="text-body italic text-primary-light-green text-center">
            Designed to meet the needs of farmers, enhance productivity, and
            foster sustainability—one that everybody understands, supports, and
            ultimately agrees upon
          </p>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <Button className="text-body px-[62px]" leftIcon={PlantIcon}>
            Analyze Your Crops
          </Button>
          <p className="text-primary-light-green text-body-bold">
            A solution every body agrees
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
