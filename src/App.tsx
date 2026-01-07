import { useEffect } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import smoothLoader from 'smooth-loader'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Personal from '@/components/sections/Personal'
import MyLife from '@/components/sections/MyLife'
import Portfolio from '@/components/sections/Portfolio'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import Author from '@/components/sections/Author'
import ToTop from '@/components/ToTop'

const App = () => {
    useEffect(() => {
        setTimeout(() => smoothLoader('[data-src]'), 300)
    }, [])

    return (
        <ParallaxProvider>
            <div className="text-gray-700">
                <Hero />
                <About />
                <Skills />
                <Personal />
                <MyLife />
                <Portfolio />
                <Testimonials />
                <Contact />
                <Author />
                <ToTop />
            </div>
        </ParallaxProvider>
    )
}

export default App
