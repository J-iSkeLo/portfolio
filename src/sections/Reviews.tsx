import React from 'react'
import type { Review as ReviewType } from '@/types/types'
import Section from '@/components/Section/Section'
import reviews from '@/modules/reviews'
import bgImage from '@/assets/img/backgrounds/reviews.webp'
import Review from '@/components/Review'

const total = reviews.length
const reviewsPerRow = Math.round(total / 3)

const reviews1: ReviewType[] = reviews.slice(0, reviewsPerRow)
const reviews2: ReviewType[] = reviews.slice(reviewsPerRow, reviewsPerRow * 2)
const reviews3: ReviewType[] = reviews.slice(reviewsPerRow * 2, total)

const Reviews: React.FC = () => {
    return (
        <div id="reviews">
            <Section title="Reviews" layers={[{ image: bgImage, speed: -20 }]}>
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        <ul className="space-y-3">{reviews1.map(r => <Review review={r} key={r.name} />)}</ul>
                        <ul className="space-y-3">{reviews2.map(r => <Review review={r} key={r.name} />)}</ul>
                        <ul className="space-y-3">{reviews3.map(r => <Review review={r} key={r.name} />)}</ul>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default Reviews