import React from 'react'
import Section from '../components/Section/Section'

const Author: React.FC = () => {
    return (
        <Section cover="bg-gradient bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
            <div className="text-center">
                <a href="https://serhii.io?welcome=btLAK"
                    target="_blank"
                    rel="noreferrer"
                    className="text-center uppercase drop-shadow-[2px_8px_2px_rgb(0_0_0/50%)] hover:drop-shadow-[8px_16px_2px_rgb(0_0_0/50%)] inline-block transition-all hover:-translate-y-1 duration-500 relative"
                >
                    <span className="block text-gray-400 tracking-widest text-xs lg:text-sm">Made by</span>

                    <div className="inline-flex font-bold tracking-widest text-sm lg:text-md relative translate-y-[-5px]">
                        <div className="absolute h-[1px] -left-12 top-1/2 w-10 bg-gray-500"></div>
                        <div className="absolute h-[1px] -right-12 top-1/2 w-10 bg-gray-500"></div>

                        <h3 className="text-white relative">Serhii</h3>
                        <h3 className="text-[#3298dc] relative">Cho</h3>
                    </div>
                </a>
            </div>
        </Section>
    )
}

export default Author