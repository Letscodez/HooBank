import React from 'react'
import { discount } from '../assets'

const Discount = () => (
    <div className='flex flex-row items-center py-[6px] md:px-4 bg-discount-gradient w-[90vw] max-w-[425px] rounded-[10px] mb-2 font-poppins font-normal text-dimWhite text-[3.5vw] xs:text-[18px] uppercase leading-[30.8px]'>
        <img className='w-[32px] h-[32px]' src={discount} alt="%" />
        <span className='text-white pl-1 pr-1'>20%</span>
        <span className='pl-1 pr-1'>Discount for</span>
        <span className='text-white pl-1 pr-1'>1 month</span>
        <span className='pl-1 pr-1'>account</span>
    </div>
  )

export default Discount