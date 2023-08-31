import React from 'react'
import { discount } from '../assets'

const Discount = () => {
  return (
    <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <div className="font-poppins font-normal text-dimWhite text-[18px] flex flex-row uppercase leading-[30.8px] ml-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <span className="text-white pl-1 pr-1">20%</span>
          Discount for
          <span className="text-white pl-1 pr-1">1 Month</span>
          Account
        </div>
    </div>
  )
}

export default Discount