import React from 'react'
import Section from '../components/Section/Section'
import bgImage from '../assets/img/backgrounds/reviews.png'
import reviews from '../modules/reviews'

const Reviews: React.FC = () => {
    return (
        <div>
            <Section title="Reviews" layers={[{ image: bgImage, speed: -20 }]}>
                <div className="container">
                    <div className="">
                        <div className="flex ">
                            <div>
                                {/* Image */}
                            </div>
                            <div>
                                <h3>Name</h3>
                                <h3>Company Name</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default Reviews