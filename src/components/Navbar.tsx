import React, { useState } from 'react'

const Navbar: React.FC = () => {
    const [isOpened, setIsOpened] = useState<boolean>(false)
    const commonHamburgerStyles = ' bg-white h-[3px] w-6 rounded-full transition-transform duration-500'

    const links = [
        { title: 'About', link: '#about' },
        { title: 'Skills', link: '#skill' },
        { title: 'Personal skills', link: '#personal' },
        { title: 'Portfolio', link: '#portfolio' },
        { title: 'Contact', link: '#contact' },
    ]

    function showNavbarHandler(): void {
        setIsOpened(!isOpened)
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

            <div className={`${isOpened ? 'mt-6 h-60 border-t pt-6' : 'h-0'} md:static md:h-full overflow-hidden border-white/20 transition-all duration-500`}>
                <ul className="flex flex-col md:flex-row justify-end space-y-3 md:space-y-0 md:space-x-6 uppercase text-md lg:text-sm">
                    {links.map(l => {
                        return <li key={l.title}>
                            <button
                                type="button"
                                data-target={l.link}
                                className="drop-shadow-font hover:drop-shadow-font-hover transition uppercase"
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