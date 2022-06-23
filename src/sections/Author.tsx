import React from 'react'
import Section from '../components/Section/Section'

const Author: React.FC = () => {
    return (
        <Section cover="bg-gradient bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
            <div className="text-center">
                <a href="https://serhii.io"
                    className="text-center uppercase drop-shadow-[2px_8px_2px_rgb(0_0_0/50%)] hover:drop-shadow-[8px_16px_2px_rgb(0_0_0/50%)] inline-block transition-all hover:-translate-y-1 duration-500 text-sm relative"
                >
                    <span className="block text-gray-400 tracking-widest">Разработка сайта</span>

                    <div className="inline-flex font-bold tracking-widest">
                        <h3 className="text-white">Serhii</h3>
                        <h3 className="text-[#3298dc]">Cho</h3>
                    </div>
                </a>
            </div>
        </Section>
    )
}

export default Author