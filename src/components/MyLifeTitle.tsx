import type React from 'react'
import { useState } from 'react'
import PlusIcon from '@/components/Icons/PlusIcon'
import MinusICon from '@/components/Icons/MinusIcon'

interface Props {
    children: React.ReactNode
    header: string
}

const MyLifeTitle: React.FC<Props> = (props) => {
    const [showContent, setShowContent] = useState(false)

    return <>
        <div
            onClick={() => setShowContent(!showContent)}
            className="flex items-center justify-between gap-3 text-xl border border-white/20 px-4 py-2 rounded-lg cursor-pointer hover:bg-black/10 transition-colors"
        >
            <h2>{props.header}</h2>
            <span>{showContent ? <MinusICon /> : <PlusIcon />}</span>
        </div>

        <div className={`mt-4 ${showContent ? 'block' : 'hidden'}`}>
            {props.children}
        </div>
    </>
}

export default MyLifeTitle