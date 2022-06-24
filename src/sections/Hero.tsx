import React from 'react'
import Navbar from '../components/Navbar'
import Social from '../components/Social'
import { Parallax } from 'react-scroll-parallax'

const Hero: React.FC = () => {
    return (
        <header className="bg-hero bg-cover relative z-10 shadow-hero text-white overflow-hidden">
            <div className="bg-gradient bg-gradient-to-r from-secondary via-main to-secondary absolute left-0 right-0 top-0 bottom-0 opacity-70"></div>

            <div className="container">
                <Navbar />

                <Parallax translateY={[-10, 10]}>
                    <div className="py-52 md:py-[220px] relative z-20 text-center">
                        <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold drop-shadow-hero">
                            OLEXIY CHORNENKYI
                        </h1>

                        <h2 className="space-x-2 uppercase text-sm md:text-lg lg:text-xl drop-shadow-hero relative inline-block">
                            {/* Line before title */}
                            <div className="h-[2px] absolute w-10 lg:w-24 bg-white shadow-lines top-1/2 rounded-full -transform-y-1/2 right-[calc(100%+5px)]"></div>

                            {/* Line after title */}
                            <div className="h-[2px] absolute w-10 lg:w-24 bg-white shadow-lines top-1/2 -transform-y-1/2 rounded-full left-[calc(100%+5px)]"></div>

                            <span>Native</span>
                            <span className="text-[1.2em]">Android</span>
                            <span>Developer</span>
                        </h2>

                        {/* Main big button */}
                        <div>
                            <a href="https://syject.com/#Contacts"
                                rel="noreferrer"
                                target="_blank"
                                className="inline-block text-md lg:text-lg text-white mt-5 lg:mt-10 bg-main-btn animate-shine bg-600 shadow-hero hover:shadow-hero-hover uppercase py-3 lg:py-3 px-7 lg:px-7 rounded-full transition-shadow duration-500"
                            >
                                Have a project? Let's talk
                            </a>
                        </div>
                    </div>
                </Parallax>

                <div className="flex justify-end mb-14">
                    <Social />
                </div>
            </div>
        </header>
    )
}

export default Hero