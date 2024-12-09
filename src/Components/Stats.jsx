import React, { useEffect } from 'react'
import CountUp from "react-countup"
import Aos from "aos"
import "aos/dist/aos.css"

const CountComponent = ({num}) => {
    return (
        <CountUp end={num}
        duration={5} delay={2}
        
        />
    )
}

const Stats = () => {
    useEffect(() => {
    Aos.init({duration:2000})
}, [])
  return (
    <>
      <div class="bg-white dark:bg-gray-900 py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">
    {/* <!-- text - start --> */}
    <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl dark:text-gray-100">Our Team by the numbers</h2>

      <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg dark:text-gray-200">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
    </div>
    {/* <!-- text - end --> */}

    <div class="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x">
      {/* <!-- stat - start --> */}
      <div data-aos="fade-up" class="flex flex-col items-center md:p-4">
        <div class="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl"><CountComponent num={200}/>+</div>
        <div class="text-sm font-semibold sm:text-base dark:text-gray-100">People</div>
      </div>
      {/* <!-- stat - end --> */}

      {/* <!-- stat - start --> */}
      <div data-aos="fade-up" class="flex flex-col items-center md:p-4">
        <div class="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl" data-aos="fade-down"><CountComponent num={500}/>+</div>
        <div class="text-sm font-semibold sm:text-base dark:text-gray-100">People</div>
      </div>

      {/* <!-- stat - start --> */}
      <div data-aos="fade-up" class="flex flex-col items-center md:p-4">
        <div class="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl"><CountComponent num={1000}/>+</div>
        <div class="text-sm font-semibold sm:text-base dark:text-gray-100">Customers</div>
      </div>
      {/* <!-- stat - end --> */}

      {/* <!-- stat - start --> */}
      <div data-aos="fade-up" class="flex flex-col items-center md:p-4">
        <div class="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">A couple</div>
        <div class="text-sm font-semibold sm:text-base dark:text-gray-100">Coffee breaks</div>
      </div>
      {/* <!-- stat - end --{'>'} */}
    </div>
  </div>
</div>
    </>
  )
}

export default Stats
