import type React from 'react'

export interface Product {
    id: string
    title: string
    intro: string
    items: string[]
}

export interface Review {
    img: string
    name: string
    companyName: string
    review: React.ReactElement,
    short?: React.ReactElement
}

export interface PersonalSkill {
    img: string
    title: string
    intro: string
    parallax: any
}