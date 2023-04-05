import type { Review as ReviewType } from '@/types/types'
import React from 'react'

interface Props {
    review: ReviewType
}

const Review: React.FC<Props> = ({ review }) => {
    return (
        <li key={review.name}>
            <figure className="relative flex flex-col rounded-lg p-6 shadow-lg border border-gray-50 bg-gradient bg-gradient-to-br from-gray-100 via-white to-gray-200">
                <figcaption className="flex items-center space-x-4">
                    <img
                        src={review.img}
                        alt={review.companyName}
                        className="h-14 w-14 rounded-full shadow-md"
                    />

                    <div>
                        <h3 className="font-bold text-xl text-gray-600">{review.name}</h3>
                        <h3 className="text-gray-400">{review.companyName}</h3>
                    </div>
                </figcaption>

                <blockquote className="mt-5 text-gray-500 leading-6 [&>p]:mb-5 [&>p:last-child]:mb-0">
                    {review.review}
                </blockquote>
            </figure>
        </li>
    )
}

export default Review