import React, { useState } from 'react'
import Section from '@/components/Section/Section'
import products from '@/modules/products'
import { Product as ProductType } from '@/types/types'

const Portfolio: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState<ProductType>(products[0])
    const [zoomedImage, setZoomedImage] = useState<string | null>(null)
    const zoomImageWrapClasses = 'fixed cursor-zoom-out top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 flex items-center justify-center'
    const zoomImageClasses = 'max-w-none h-[calc(100%-100px)] w-auto'

    function setZoomedImageHandler(item: string): void {
        if (zoomedImage === item) {
            setZoomedImage(null)
            return
        }

        setZoomedImage(item)
    }

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
                    <p className="py-14 text-lg lg:text-xl max-w-5xl mx-auto text-center leading-8 text-gray-600">
                        {selectedProduct.intro}
                    </p>

                    {/* Items */}
                    <div className="min-h-[450px] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-6">
                        {products.map(product => {
                            return product.items.map(item => {
                                return (
                                    <div
                                        key={item}
                                        className={
                                            (selectedProduct.id === product.id ? '' : 'hidden')
                                            + ' ' +
                                            (zoomedImage === item ? zoomImageWrapClasses : 'cursor-zoom-in')
                                            + ' transition-all duration-300 hover:scale-105'
                                        }
                                        onClick={() => setZoomedImageHandler(item)}
                                    >
                                        <img
                                            data-src={item}
                                            width="220"
                                            height="468"
                                            alt={product.title}
                                            className={
                                                'transition-all duration-300 mx-auto drop-shadow-md'
                                                + ' ' +
                                                (zoomedImage === item ? zoomImageClasses : 'max-w-auto md:max-w-[220px]')
                                            }
                                        />
                                    </div>
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