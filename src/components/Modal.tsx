import type React from 'react'

interface Props {
    children: React.ReactNode
    show: boolean
    onClose: () => void
}

const Modal: React.FC<Props> = props => {
    window.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            props.onClose()
        }
    })

    const modalElement = (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div
                className="absolute inset-0 bg-gray-500 opacity-75"
                onClick={props.onClose}
            ></div>

            <div className="rounded-lg shadow-lg absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
                <button
                    className="text-gray-500 hover:text-gray-700 text-3xl font-bold absolute right-1 top-0 z-10 p-2"
                    onClick={props.onClose}
                >
                    &times;
                </button>

                {props.children}
            </div>
        </div>
    )

    return <>{props.show ? modalElement : null}</>
}

export default Modal
