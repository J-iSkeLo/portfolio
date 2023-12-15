import type React from 'react'
import { useState, useEffect } from 'react'
import PlusIcon from '@/components/Icons/PlusIcon'
import MinusICon from '@/components/Icons/MinusIcon'
import { events } from 'config'
import dispatchEvent from '@/modules/dispatchEvent'
import listenEvent from '@/modules/listenEvent'

interface Props {
    children: React.ReactNode
    header: string
}

const MyLifeTitle: React.FC<Props> = (props) => {
    const [showContent, setShowContent] = useState(false)

    useEffect(() => {
        listenEvent<string>(events.myLifeTitleOpened, header => {
            if (header !== props.header) {
                setShowContent(false)
            }
        })
    }, [])

    function handleTitleClick() {
        if (showContent === false) {
            dispatchEvent<string>(events.myLifeTitleOpened, props.header)
        }

        setShowContent(!showContent)
    }

    return <>
        <div
            onClick={handleTitleClick}
            className="flex items-center justify-between gap-3 leading-6 text-sm md:text-md xl:text-xl border border-white/20 px-4 py-2 rounded-lg cursor-pointer hover:bg-black/10 transition-colors"
        >
            <h2>{props.header}</h2>
            <span>{showContent ? <MinusICon /> : <PlusIcon />}</span>
        </div>

        <div className={`mt-4 ${showContent ? 'block' : 'hidden'}`}>
            <div className="px-3 py-1 text-[.95em] lg:text-md">
                {props.children}
            </div>
        </div>
    </>
}

export default MyLifeTitle