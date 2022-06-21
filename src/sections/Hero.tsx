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
                    <h1 className="text-5xl font-bold">
                        OLEXIY CHORNENKYI
                    </h1>

                    <h3>
                        Native <span>Android</span> Developer
                    </h3>
                </div>
            </div>
        </header>
    )
}

export default Hero