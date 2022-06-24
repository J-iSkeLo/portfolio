import React, { useState } from 'react'
import Section from '../components/Section/Section'
import products from '../modules/products'
import { Product as ProductType } from '../types/types'

const Portfolio: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState<ProductType>(products[0])

    return (
        <div className="px-7" id="portfolio">
            <Section title="Portfolio">
                <div className="container">

                    {/* Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                        {products.map(product => {
                            return (
                                <button key={product.id}
                                    className={(product.id === selectedProduct.id ? '!border-main from-secondary to-main text-white' : 'from-gray-100 via-gray-50 to-white') +  ` w-full bg-gradient bg-gradient-to-br py-3 px-5 rounded-full border border-gray-100 shadow-lg transition-shadow hover:shadow-xl duration-500 !outline-none focus:outline-none focus:ring-transparent`}
                                    onClick={() => setSelectedProduct(product)}
                                >
                                    <span className="drop-shadow-md">{product.title}</span>
                                </button>
                            )
                        })}
                    </div>

                    {/* Intro */}
                    <p className="py-14 text-lg lg:text-xl max-w-5xl mx-auto text-center leading-8 text-gray-600">
                        {selectedProduct.intro}
                    </p>

                    {/* Items */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {selectedProduct.items.map(item => {
                            return (
                                <div key={item}>
                                    <img src={item}
                                        alt={selectedProduct.title}
                                        className="max-w-auto md:max-w-[220px] mx-auto"
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default Portfolio