import React from 'react'
import Navbar from '../components/Navbar'

interface Props {
}

const Hero: React.FC<Props> = (props) => {
    return (
        <header className="bg-hero bg-cover relative z-10 shadow-hero text-white">
            <div className="bg-gradient bg-gradient-to-r from-secondary via-main to-secondary absolute left-0 right-0 top-0 bottom-0 opacity-70"></div>

            <div className="container">
                <Navbar />

                <div className="pt-[200px] pb-[100px] relative z-20 text-center">
                    <h1 className="text-5xl font-bold drop-shadow-hero">
                        OLEXIY CHORNENKYI
                    </h1>

                    <h2 className="space-x-2 uppercase text-xl drop-shadow-hero relative inline-block">
                        {/* Line before title */}
                        <div className="h-[2px] absolute w-24 bg-white shadow-lines top-1/2 rounded-full -transform-y-1/2 right-[calc(100%+13px)]"></div>

                        {/* Line after title */}
                        <div className="h-[2px] absolute w-24 bg-white shadow-lines top-1/2 -transform-y-1/2 rounded-full left-[calc(100%+13px)]"></div>

                        <span>Native</span>
                        <span className="text-[1.2em]">Android</span>
                        <span>Developer</span>
                    </h2>

                    <div>
                        <a href="https://syject.com/#Contacts"
                            rel="noreferrer"
                            target="_blank"
                            className="inline-block text-md text-white mt-10 bg-main-btn animate-shine bg-600 shadow-hero hover:shadow-hero-hover uppercase py-3 px-7 rounded-full transition-shadow duration-500"
                        >
                            Have a project? Let's talk
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Hero