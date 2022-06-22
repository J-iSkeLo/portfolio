import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Personal from './sections/Personal'
import { ParallaxProvider } from 'react-scroll-parallax';

const App = () => {
    return (
        <ParallaxProvider>
            <div className="text-gray-700">
                <Hero />
                <About />
                <Skills />
                <Personal />
            </div>
        </ParallaxProvider>
    )
}

export default App
