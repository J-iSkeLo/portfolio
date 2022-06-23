import React, { useState } from 'react'
import Section from '../../components/Section/Section'
import products from '../../modules/products'
import Product from './Product'
import { Product as ProductType } from '../../types/types'

const Portfolio: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState<ProductType>(products[0])

    return (
        <div className="px-7">
            <Section title="Portfolio">
                <div className="container">

                    {/* Buttons */}
                    <div className="flex justify-evenly flex-wrap gap-5">
                        {products.map(product => {
                            return (
                                <button className="py-3 px-10 rounded-full border border-gray-100 shadow-lg bg-gradient bg-gradient-to-br from-gray-100 via-gray-50 to-white transition-shadow hover:shadow-xl duration-500">
                                    <span className="drop-shadow-md">{product.title}</span>
                                </button>
                            )
                        })}
                    </div>

                    {/* Intro */}
                    <p className="py-14 text-lg max-w-3xl mx-auto text-center leading-8">
                        {selectedProduct.intro}
                    </p>

                    {/* Items */}
                    <div>
                        {products.map(product => <Product key={product.id} product={product} />)}
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default Portfolio