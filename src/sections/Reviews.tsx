import React from 'react'
import Section from '../components/Section/Section'
import reviews from '../modules/reviews'
import bgImage from '../assets/img/backgrounds/reviews.png'

const Reviews: React.FC = () => {
    return (
        <div>
            <Section title="Reviews" layers={[{ image: bgImage, speed: -20 }]}>
                <div className="container">
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reviews.map(review => {
                            return (
                                <li key={review.name}>
                                    <figure className="relative flex flex-col rounded-lg p-6 shadow-lg border border-gray-50 bg-gradient bg-gradient-to-br from-gray-100 via-white to-gray-200">
                                        <figcaption className="flex items-center space-x-4">
                                            <img data-src={review.img}
                                                alt={review.companyName}
                                                className="h-14 w-14 rounded-full shadow-md"
                                            />

                                            <div>
                                                <h3 className="font-bold text-xl text-gray-600">{review.name}</h3>
                                                <h3 className="text-gray-400">{review.companyName}</h3>
                                            </div>
                                        </figcaption>

                                        <blockquote className="mt-5 text-gray-500 leading-6">
                                            <p>{review.review}</p>
                                        </blockquote>
                                    </figure>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </Section>
        </div>
    )
}

export default Reviews