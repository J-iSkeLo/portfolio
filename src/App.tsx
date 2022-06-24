import { ParallaxProvider } from 'react-scroll-parallax';
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Personal from './sections/Personal'
import Work from './sections/Work'
import Portfolio from './sections/Portfolio'
import Reviews from './sections/Reviews'
import Contact from './sections/Contact'
import Author from './sections/Author'
import ToTop from './components/ToTop'

const App = () => {
    function listenForScrollEvent(): void {
        const btn = document.getElementById('to-top')

        if (!btn) {
            console.error(`Cannot find selector #to-top for Go to top button`)
            return
        }

        console.log('here');
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
                <Reviews />
                <Contact />
                <Author />
                <ToTop />
            </div>
        </ParallaxProvider>
    )
}

export default App
