export interface Product {
    id: string
    title: string
    intro: string
    items: string[]
    link?: string
}

export interface Testimonial {
    img: string
    name: string
    companyName: string
    content: string
    short?: string
}

export interface PersonalSkill {
    img: string
    title: string
    intro: string
}
