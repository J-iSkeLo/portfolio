import React from 'react'
import Section from '../components/Section/Section'
import bgImage from '../assets/img/backgrounds/tetris.png'
import skyImage from '../assets/img/backgrounds/sky.png'
import photo from '../assets/img/me-2.jpg'
import { Parallax } from 'react-scroll-parallax'
import screenIsMobile from '../modules/screenIsMobile'

const Skills: React.FC = () => {
    return (
        <div>
            <Section title="My work"
                layers={[
                    { image: skyImage, speed: -20 },
                    { image: bgImage, speed: -5 },
                ]}
            >
                <div className="flex items-center gap-7 px-10">
                    <div>
                        <Parallax disabled={screenIsMobile()} speed={3}>
                            <img src={photo}
                                alt="Olexiy Chornenkyi"
                                className="max-w-xs rounded-2xl shadow-hero"
                            />
                        </Parallax>
                    </div>
                    <div className="text-white text-lg !leading-8 drop-shadow-lg">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero ullam corrupti hic error doloremque quia! Quas dicta cum qui saepe inventore quod, recusandae et accusantium aliquam molestias accusamus quia suscipit sit obcaecati officiis ea ad nemo magni. Quidem voluptates aperiam quod sint est aspernatur similique, nostrum quo quia expedita fugit?
                        <br /><br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex libero quas dignissimos, sapiente fugit dolorem tenetur corrupti reprehenderit illum illo harum nam ea! Laudantium sed enim veniam impedit nisi voluptatum corporis molestias doloremque dolore dolores nobis quam expedita reprehenderit pariatur veritatis voluptatibus rem aliquid aliquam numquam officiis, adipisci ex eveniet? Consequuntur culpa repudiandae repellat consequatur eum ea optio velit possimus, veritatis corrupti ratione impedit voluptates quasi odio odit unde.
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default Skills