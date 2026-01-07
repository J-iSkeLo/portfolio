import Section from '@/components/Section/Section'

const Author: React.FC = () => {
    return (
        <Section cover="bg-gradient bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800">
            <div className="text-center">
                {/* eslint-disable-next-line */}
                <a
                    href="https://serhii.io/about-me"
                    target="_blank"
                    className="text-center inline-block transition-all hover:-translate-y-2 duration-500 relative group"
                >
                    <span className="block text-gray-400 tracking-widest text-xs lg:text-sm group-hover:-translate-y-2 transition-all duration-500 group-hover:scale-90 drop-shadow-[2px_8px_2px_rgb(0_0_0/50%)] group-hover:drop-shadow-[2px_5px_2px_rgb(0_0_0/50%)]">
                        <span className="mr-1">MADE</span>
                        <span className="opacity-100 m-0 transition-all duration-1000 inline-block">
                            WITH ❤️
                        </span>
                    </span>

                    <div className="inline-flex font-bold tracking-widest text-sm lg:text-md relative">
                        <div className="absolute h-[1px] -left-12 top-1/2 w-8 delay-200 group-hover:w-24 bg-white group-hover:opacity-30 group-hover:translate-x-[-4px] group-hover:-translate-y-2.5 transition-all duration-1000"></div>
                        <div className="absolute h-[1px] -right-12 top-1/2 w-8 delay-200 group-hover:w-24 bg-white group-hover:opacity-30 group-hover:translate-x-[5px] group-hover:-translate-y-2.5 transition-all duration-1000"></div>

                        <h3 className="text-white relative font-sans group-hover:translate-y-2 transition-all duration-700 group-hover:scale-150 drop-shadow-[2px_8px_2px_rgb(0_0_0/50%)] group-hover:drop-shadow-[8px_10px_2px_rgb(0_0_0/50%)]">
                            &#123;S&#125; SERHII
                        </h3>
                    </div>
                </a>
            </div>
        </Section>
    )
}

export default Author
