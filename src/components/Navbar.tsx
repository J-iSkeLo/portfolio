import React from 'react'

const Navbar: React.FC = () => {
    const links = [
        { title: 'About', link: '#about' },
        { title: 'Professional skill', link: '#skill' },
        { title: 'Personal skills', link: '#personal' },
        { title: 'Portfolio', link: '#portfolio' },
        { title: 'Contact', link: '#contact' },
    ]

    return (
        <nav className="pt-12 text-white relative z-20">
            <div className="hidden lg:block">
                <ul className="flex justify-end space-x-6 uppercase text-sm">
                    {links.map(l => {
                        return <li>
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