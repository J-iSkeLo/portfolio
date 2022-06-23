import { useEffect } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';
import smoothLoader from 'smooth-loader'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Personal from './sections/Personal'
import Work from './sections/Work'
import Portfolio from './sections/Portfolio'

const App = () => {
    useEffect(() => {
        smoothLoader('img[data-src]')
    }, [])

    return (
        <ParallaxProvider>
            <div className="text-gray-700 pb-[1000px]">
                <Hero />
                <About />
                <Skills />
                <Personal />
                <Work />
                <Portfolio />
            </div>
        </ParallaxProvider>
    )
}

export default App
