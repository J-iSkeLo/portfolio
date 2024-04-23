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
    }, [props.header])

    function handleTitleClick() {
        if (showContent === false) {
            dispatchEvent<string>(events.myLifeTitleOpened, props.header)
        }

        setShowContent(!showContent)
    }

    return <>
        <div
            onClick={handleTitleClick}
            className={`flex items-center justify-between gap-3 leading-6 text-sm md:text-md xl:text-xl border px-4 py-2 rounded-lg cursor-pointer transition-colors ${showContent ? 'border-purple-300/50 text-purple-200 bg-black/20' : 'border-white/20 hover:bg-black/10'}`}
        >
            <h2>{props.header}</h2>
            <span>{showContent ? <MinusICon /> : <PlusIcon />}</span>
        </div>

        <div className={`mt-4 ${showContent ? 'block' : 'hidden'}`}>
            <div className="p-4 text-[.95em] lg:text-md bg-black/20 rounded-xl">
                {props.children}
            </div>
        </div>
    </>
}

export default MyLifeTitle