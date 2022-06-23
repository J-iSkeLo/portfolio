import React, { useEffect } from 'react'

const ToTop: React.FC = () => {
    useEffect(() => {
        listenForScrollEvent()
    }, [])

    function listenForScrollEvent(): void {
        const btn = document.getElementById('to-top')

        if (!btn) {
            console.error(`Cannot find selector #to-top for Go to top button`)
            return
        }

        btn.classList.add(document.body.scrollTop > 600 ? 'opacity-70' : 'opacity-0')

        window.addEventListener('scroll', e => {
            if (window.scrollY > 600) {
                btn.classList.remove('opacity-0')
                btn.classList.add('opacity-60')
            } else {
                btn.classList.add('opacity-0')
                btn.classList.remove('opacity-60')
            }
        })
    }

    function goToTopHandler(): void {
        document.querySelector('body')!.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    return (
        <div>
            <button type="button"
                className="fixed bottom-6 right-6 z-20 bg-main p-2 rounded-full shadow-hero opacity-0 transition-opacity duration-1000"
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