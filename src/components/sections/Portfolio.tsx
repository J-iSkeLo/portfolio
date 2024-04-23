import React, { useState } from 'react'
import Section from '@/components/Section/Section'
import products from '@/modules/products'
import { Product as ProductType } from '@/types/types'
import ProductImage from '@/components/ProductImage'
import playButtonImage from '@/assets/img/google-play-button.webp'

const Portfolio: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState<ProductType>(products[0])

    return (
        <div className="lg:px-7" id="portfolio">
            <Section title="Portfolio">
                <div className="container">

                    {/* Buttons */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {products.map(product => {
                            return (
                                <button
                                    key={product.id}
                                    className={(product.id === selectedProduct.id ? '!border-main from-secondary to-main text-white' : 'from-gray-100 via-gray-50 to-white') +  ` w-full bg-gradient bg-gradient-to-br py-2 px-3 lg:py-3 lg:px-5 rounded-full border border-gray-100 shadow-lg transition-shadow hover:shadow-xl duration-500 !outline-none focus:outline-none focus:ring-transparent`}
                                    onClick={() => setSelectedProduct(product)}
                                >
                                    <span className="drop-shadow-md">{product.title}</span>
                                </button>
                            )
                        })}
                    </div>

                    {/* Intro */}
                    <div className="pt-14 pb-8 text-lg lg:text-xl max-w-5xl mx-auto text-center leading-8 text-gray-600">
                        {selectedProduct.intro}

                        {selectedProduct.link ?
                            <div className="text-center mt-6">
                                <a
                                    href={selectedProduct.link}
                                    className="hover:scale-105 transition-transform duration-300 mx-auto inline-block"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={playButtonImage}
                                        alt="Google Play Button"
                                        className="w-56 drop-shadow-md"
                                    />
                                </a>
                            </div>
                        : null}
                    </div>

                    {/* Items */}
                    <div className="min-h-[450px] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-6">
                        {products.map(product => {
                            return product.items.map(img => {
                                return (
                                    <ProductImage
                                        key={img}
                                        product={product}
                                        isSelected={selectedProduct.id === product.id}
                                        img={img}
                                    />
                                )
                            })
                        })}
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default Portfolio