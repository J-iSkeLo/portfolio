import type React from 'react'
import { useState } from 'react'

interface Props {
    children: React.ReactNode
}

const Modal: React.FC<Props> = (props) => {
    const [showModal, setShowModal] = useState<boolean>(false)

    window.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            setShowModal(false)
        }
    })

    const modalElement = (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div
                className="absolute inset-0 bg-gray-500 opacity-75"
                onClick={() => setShowModal(false)}
            ></div>

            <div className="bg-white rounded-lg shadow-lg sm:max-w-lg sm:w-full p-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {props.children}
            </div>
        </div>
    )

    return <>{showModal ? modalElement : null}</>
}

export default Modal