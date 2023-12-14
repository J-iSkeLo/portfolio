import React, { useState } from 'react'

const Navbar: React.FC = () => {
    const [isOpened, setIsOpened] = useState<boolean>(false)
    const commonHamburgerStyles = ' bg-white h-[3px] w-6 rounded-full transition-transform duration-500'

    const links = [
        { title: 'About me', target: '#about' },
        { title: 'Skills', target: '#skills' },
        { title: 'Personal skills', target: '#personal' },
        { title: 'My Life', target: '#life' },
        { title: 'Portfolio', target: '#portfolio' },
        { title: 'testimonials', target: '#testimonials' },
        { title: 'Contact', target: '#contact' },
    ]

    function showNavbarHandler(): void {
        setIsOpened(!isOpened)
    }

    function anchorHandler(e: React.MouseEvent<HTMLButtonElement>, targetSelector: string): void {
        const targetElem = document.querySelector(targetSelector)

        if (!targetElem) {
            console.error(`Cannot find target selector ${targetSelector} for scrolling`)
            return
        }

        targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <nav className="pt-7 lg:pt-12 text-w">
            <div className="flex md:hidden justify-end">
                <button type="button"
                    data-toggle="collapse"
                    className="flex flex-col gap-y-[6px] py-2 px-4 drop-shadow-font"
                    onClick={showNavbarHandler}
                >
                    <div className={(isOpened ? '-rotate-45 translate-y-[4px]' : '') + commonHamburgerStyles}></div>
                    <div className={(isOpened ? 'rotate-45 translate-y-[-5px]' : '') + commonHamburgerStyles}></div>
                </button>
            </div>

            <div className={`${isOpened ? 'mt-6 h-[270px] border-t pt-6' : 'h-0'} md:static md:h-full overflow-hidden lg:overflow-visible border-white/20 transition-all duration-500`}>
                <ul className="flex flex-col md:flex-row justify-end space-y-3 md:space-y-0 md:space-x-6 uppercase text-md lg:text-sm">
                    {links.map(l => {
                        return <li key={l.title}>
                            <button
                                type="button"
                                className="drop-shadow-font hover:drop-shadow-font-hover transition uppercase"
                                onClick={e => anchorHandler(e, l.target)}
                            >
                                {l.title}
                            </button>
                        </li>
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar