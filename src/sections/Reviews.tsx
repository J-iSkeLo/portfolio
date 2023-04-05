import React from 'react'
import Section from '@/components/Section/Section'
import reviews from '@/modules/reviews'
import bgImage from '@/assets/img/backgrounds/reviews.webp'
import Review from '@/components/Review'

const Reviews: React.FC = () => {
    return (
        <div id="reviews">
            <Section title="Reviews" layers={[{ image: bgImage, speed: -20 }]}>
                <div className="container">
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reviews.map(r => <Review review={r} />)}
                    </ul>
                </div>
            </Section>
        </div>
    )
}

export default Reviews