import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ReadMoreIcon from '../../../../public/assets/icons/ReadMoreIcon';

const Info = () => {
  return (
    <div className="flex flex-col w-full relative ">
      <Image
        src="/assets/home/info-bg.png"
        alt="Information Landing Page Background"
        width={402}
        height={500}
        className="z-[-1]"
      />
      <div className="flex flex-col w-full p-5 h-full absolute">
        <div className="flex flex-col gap-2 text-right text-super-white items-end">
          <p className="text-subheader">
            Do you know that
          </p>
          <p className='text-main-header'>
            Climate change impacts agricultural decisions?
          </p>
          <p className='text-body'>
          Yes, climate change significantly affects farming decisions by altering weather patterns and increasing the frequency
           of extreme conditions like droughts and intense storms. For example, U.S. corn yields may rise by 3.1%, but soybean 
           yields could drop by 3% by 2036 due to shifting climate conditions​. Farmers must adapt by using real-time data on 
           soil moisture, temperature, and wind to optimize crop choices and irrigation. Our app helps by providing this essential 
           information, making climate-smart farming decisions easier.
          </p>
          <Link 
          href="https://www.ers.usda.gov/topics/natural-resources-environment/climate-change/" 
          className='text-caption-bold underline italic flex flex-row items-center gap-1'>
            Read more
            <ReadMoreIcon />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Info
