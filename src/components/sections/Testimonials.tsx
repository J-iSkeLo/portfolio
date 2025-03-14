import type React from 'react'
import type { Testimonial as TestimonialType } from '@/types/types'
import { useState } from 'react'
import Section from '@/components/Section/Section'
import testimonials from '@/modules/testimonials'
import bgImage from '@/assets/img/backgrounds/testimonials.webp'
import Testimonial from '@/components/Testimonial'
import Modal from '@/components/Modal'

const total = testimonials.length
const testimonialsPerRow = Math.round(total / 3)

const testimonials1: TestimonialType[] = testimonials.slice(0, testimonialsPerRow)
const testimonials2: TestimonialType[] = testimonials.slice(
    testimonialsPerRow,
    testimonialsPerRow * 2,
)
const testimonials3: TestimonialType[] = testimonials.slice(
    testimonialsPerRow * 2,
    total,
)

const Testimonials: React.FC = () => {
    const [fullContent, setFullContent] = useState<TestimonialType | null>(null)

    function printTestimonial(testimonials: TestimonialType[]): JSX.Element[] {
        return testimonials.map(r => (
            <Testimonial
                testimonial={r}
                key={r.name}
                setFullContent={setFullContent}
                showFull={false}
            />
        ))
    }

    return (
        <div id="testimonials">
            {fullContent ? (
                <Modal
                    show={fullContent !== null}
                    onClose={() => setFullContent(null)}
                >
                    <Testimonial
                        testimonial={fullContent}
                        setFullContent={setFullContent}
                        showFull={true}
                    />
                </Modal>
            ) : null}

            <Section title="Testimonials" layers={[{ image: bgImage, speed: -20 }]}>
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-7">
                        <div className="space-y-4 lg:space-y-7">
                            {printTestimonial(testimonials1)}
                        </div>
                        <div className="space-y-4 lg:space-y-7">
                            {printTestimonial(testimonials2)}
                        </div>
                        <div className="space-y-4 lg:space-y-7">
                            {printTestimonial(testimonials3)}
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default Testimonials
