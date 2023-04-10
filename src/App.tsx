import { useEffect } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import smoothLoader from 'smooth-loader'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Personal from './sections/Personal'
import Work from './sections/Work'
import Portfolio from './sections/Portfolio'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Author from './sections/Author'
import ToTop from './components/ToTop'

const App = () => {
    useEffect(() => {
        smoothLoader('[data-src]')
    }, [])

    function listenForScrollEvent(): void {
        const btn = document.getElementById('to-top')

        if (!btn) {
            console.error(`Cannot find selector #to-top for Go to top button`)
            return
        }

        btn.classList.add(document.body.scrollTop > 600 ? 'opacity-70' : 'opacity-0')
    }

    return (
        <ParallaxProvider>
            <div className="text-gray-700" onScroll={listenForScrollEvent}>
                <Hero />
                <About />
                <Skills />
                <Personal />
                <Work />
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
