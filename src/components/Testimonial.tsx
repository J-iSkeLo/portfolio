import type { Testimonial as TestimonialType } from '@/types/types'
import type React from 'react'

interface Props {
    testimonial: TestimonialType
    setFullContent: (testimonial: TestimonialType) => void
    showFull: boolean
}

const Testimonial: React.FC<Props> = ({ testimonial, setFullContent, showFull }) => {
    const showMoreButton = (
        <button
            type="button"
            onClick={toggleShowMore}
            className="text-gray-500 hover:text-gray-600"
        >
            Show full
        </button>
    )

    function toggleShowMore(): void {
        setFullContent(testimonial)
    }

    return (
        <div>
            <figure className="relative flex flex-col rounded-lg p-6 shadow-lg border border-gray-50 bg-gradient bg-gradient-to-br from-gray-100 via-white to-gray-200">
                <figcaption className="flex items-center space-x-4">
                    <img
                        src={testimonial.img}
                        alt={testimonial.name}
                        className="h-14 w-14 rounded-full shadow-md"
                    />

                    <div>
                        <h3 className="font-bold text-xl text-gray-600">
                            {testimonial.name}
                        </h3>
                        <h3 className="text-gray-400">{testimonial.companyName}</h3>
                    </div>
                </figcaption>

                <blockquote className="mt-5 text-gray-500 leading-6 [&>p]:mb-5 [&>p:last-child]:mb-0">
                    {!showFull && testimonial.short
                        ? testimonial.short
                        : testimonial.content}
                    {showFull || !testimonial.short ? null : showMoreButton}
                </blockquote>
            </figure>
        </div>
    )
}

export default Testimonial
