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
                <MyLife />
                <Portfolio />
                <Testimonials />
                <Contact />
                {/* <Author /> */}
                <ToTop />
            </div>
        </ParallaxProvider>
    )
}

export default App
