import type React from 'react'

interface Props {
    children: React.ReactNode
    show: boolean
    onClose: () => void
}

const Modal: React.FC<Props> = (props) => {

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

            <div className="bg-white rounded-lg shadow-lg sm:max-w-lg sm:w-full p-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {props.children}
            </div>
        </div>
    )

    return <>{props.show ? modalElement : null}</>
}

export default Modal