import React, { useEffect } from 'react'

const ToTop: React.FC = () => {
    useEffect(() => {
        const btn = document.getElementById('to-top') as HTMLButtonElement

        if (!btn) {
            console.error(`Cannot find selector #to-top for Go to top button`)
            return
        }

        showHideButton(btn)

        window.addEventListener('scroll', e => showHideButton(btn))
    }, [])

    function showHideButton(btn: HTMLButtonElement): void {
        if (window.scrollY > 1000) {
            btn.classList.remove('opacity-0')
            btn.classList.remove('pointer-events-none')
            btn.classList.add('opacity-60')
        } else {
            btn.classList.add('opacity-0')
            btn.classList.add('pointer-events-none')
            btn.classList.remove('opacity-60')
        }
    }

    function goToTopHandler(): void {
        document.querySelector('body')!.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    return (
        <div>
            <button
                type="button"
                className="fixed bottom-6 right-6 z-20 bg-main p-2 rounded-full shadow-hero opacity-0 transition-all duration-500 hover:scale-110"
                onClick={goToTopHandler}
                id="to-top"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="white">
                    <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    )
}

export default ToTop