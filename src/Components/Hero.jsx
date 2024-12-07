import React,{useState} from "react"

export const Hero = () => {
    return (
        <>
        <header className="bg-white dark:bg-gray-900">
    <div className="lg:flex">
        <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
            <div className="max-w-xl">
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">We Provide Your <span className="text-blue-600 dark:text-blue-400">Ideas</span></h2>

                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">Step into the world of wix – where style, quality, and value come together. Explore our collections today and find exactly what you’ve been looking for!
</p>

                <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                    <a href="#" className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700">Get Started</a>
                    <a href="#" className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300">Learn More</a>
                </div>
            </div>
        </div>

        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
            <div className="w-full h-full bg-cover" style={{backgroundImage: `url("https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80")`}}>
                <div className="w-full h-full bg-black opacity-25"></div>
            </div>
        </div>
    </div>
</header>
        </>
    )

}