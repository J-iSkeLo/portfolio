import { useEffect } from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Personal from './sections/Personal'
import Work from './sections/Work'
import { ParallaxProvider } from 'react-scroll-parallax';
import smoothLoader from 'smooth-loader'

const App = () => {
    useEffect(() => {
        smoothLoader('img[data-src]')
    }, [])

    return (
        <ParallaxProvider>
            <div className="text-gray-700 pb-[2000px]">
                <Hero />
                <About />
                <Skills />
                <Personal />
                <Work />
            </div>
        </ParallaxProvider>
    )
}

export default App
