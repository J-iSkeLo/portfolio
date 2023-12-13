import type React from 'react'
import { useState } from 'react'
import PlusIcon from '@/components/Icons/PlusIcon'
import MinusICon from '@/components/Icons/MinusIcon'

interface Props {
    children: React.ReactNode
    header: string
}

const WorkTitle: React.FC<Props> = (props) => {
    const [showContent, setShowContent] = useState(false)

    return <>
        <div
            onClick={() => setShowContent(!showContent)}
            className="flex items-center justify-between gap-3 text-xl border px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-black/30 transition-colors"
        >
            <h2>{props.header}</h2>
            <span>{showContent ? <MinusICon /> : <PlusIcon />}</span>
        </div>

        <div className={`mt-4 ${showContent ? 'block' : 'hidden'}`}>
            {props.children}
        </div>
    </>
}

export default WorkTitle