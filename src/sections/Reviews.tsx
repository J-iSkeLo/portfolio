import type React from 'react'
import type { Review as ReviewType } from '@/types/types'
import { useState } from 'react'
import Section from '@/components/Section/Section'
import reviews from '@/modules/reviews'
import bgImage from '@/assets/img/backgrounds/reviews.webp'
import Review from '@/components/Review/Review'
import Modal from '@/components/Modal'

const total = reviews.length
const reviewsPerRow = Math.round(total / 3)

const reviews1: ReviewType[] = reviews.slice(0, reviewsPerRow)
const reviews2: ReviewType[] = reviews.slice(reviewsPerRow, reviewsPerRow * 2)
const reviews3: ReviewType[] = reviews.slice(reviewsPerRow * 2, total)

const Reviews: React.FC = () => {
    const [fullReview, setFullReview] = useState<ReviewType | null>(null)

    function printReviews(reviews: ReviewType[]): JSX.Element[] {
        return reviews.map(r => (
            <Review
                review={r}
                key={r.name}
                setFullReview={setFullReview}
                showFull={false}
            />
        ))
    }

    return (
        <div id="reviews">
            {fullReview ? (
                <Modal show={fullReview !== null} onClose={() => setFullReview(null)}>
                    <Review
                        review={fullReview}
                        setFullReview={setFullReview}
                        showFull={true}
                    />
                </Modal>
            ) : null}

            <Section title="Reviews" layers={[{ image: bgImage, speed: -20 }]}>
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-7">
                        <div className="space-y-4 lg:space-y-7">
                            {printReviews(reviews1)}
                        </div>
                        <div className="space-y-4 lg:space-y-7">
                            {printReviews(reviews2)}
                        </div>
                        <div className="space-y-4 lg:space-y-7">
                            {printReviews(reviews3)}
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default Reviews