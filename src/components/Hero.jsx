import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center maw-w-[800px] w-full mx-auto p-4'>
<div className='flex flex-col gap-4'>
    <p>IT'S TIME TO</p>
    <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>#STAY<span className='text-blue-400'>HARD</span></h1>
    </div>
    <p className='text-sm md:text-base font-light '>I hereby acknowledgement that I may < span className='text-blue-400 font medium'>want to quit halfway through this routine</span> but by clicking the button below I have promised myself to finishing this workout <span className='text-blue-400 font medium'>OR to sit here and try until I can finish this workout.</span></p>
    <p className='text-sm md:text-base'>failure will not be an option today</p>

<Button func={() => {
  window.location.href = '/#generate'
}} text={"Accept & Begin"}></Button>
    </div>
  )
}
