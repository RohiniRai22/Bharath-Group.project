import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm'>
            {/*---left section----*/}
            <div>
                <img className='mb-5 w-40' src={assets.logo}/>
                <p className='w-full md:m-2/3 text-gray-600 leading-6'>The Bharath Group Website would focus on increasing professional conduct online with services
              such as earthmoving, event management, furniture rental, roadline services, traveling services,
              catering, sounds, and lights.</p>

            </div>
            {/*---center section----*/}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy policy</li>
                </ul>


            </div>
            {/*---right section----*/}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-600'>
                    <li>+1-21-456-7891</li>
                    <li>bharathgroup@gmail</li>
                </ul>
                
            </div>

        </div>
        {/*----Copyright text----*/}
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>copyright 2024@bharathgroup-All right reserved.</p>

        </div>
      
    </div>
  )
}

export default Footer
