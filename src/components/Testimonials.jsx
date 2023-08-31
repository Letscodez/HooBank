import React from 'react'
import { feedback } from '../constants'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => (
  <section className='sm:py-16 py-6 flex justify-center items-center flex-col relative' id='clients'>
      {/* --------------TODO-------------- */}
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[45%] rounded-full blue__gradient" />
      {/* -------------------------------- */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-16 relative z-[1]">
        <h1 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[81.8px] w-full'>What people are <br className='sm:block hidden'/> saying about us</h1>
        <div className="w-full md:mt-0 mt-6">
          <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[32.4px] tracking-[0.18px] text-left max-w-[450px]'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-conatiner realtive z-[1]">
        {feedback.map((card) =>(
          <FeedbackCard key={card.id} {...card}/>
        ))}
      </div>
  </section>
)


export default Testimonials