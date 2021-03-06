import React, { useState } from 'react'
import Section from '../components/Section/Section'
import products from '../modules/products'
import { Product as ProductType } from '../types/types'
import screenIsMobile from '../modules/screenIsMobile'

const Portfolio: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState<ProductType>(products[0])

    function zoomImageInHandler(e: React.MouseEvent<HTMLImageElement>): void {
        if (!screenIsMobile()) {
            return
        }

        const elem = e.target as HTMLImageElement
        const zoomClasses = ['fixed', 'left-[5%]', 'right-[5%]', 'w-auto', 'top-[50px]', 'h-[calc(100vh-100px)]', 'z-40']

        if (elem.classList.contains('fixed')) {
            zoomClasses.forEach(cl => elem.classList.remove(cl))
            return
        }

        zoomClasses.forEach(cl => elem.classList.add(cl))
    }

    return (
        <div className="lg:px-7" id="portfolio">
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
                    <div className="min-h-[450px] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-6">
                        {products.map(product => {
                            return product.items.map(item => {
                                return (
                                    <div key={item} className={selectedProduct.id === product.id ? '' : 'hidden'}>
                                        <img data-src={item}
                                            width="220"
                                            height="468"
                                            alt={product.title}
                                            className="max-w-auto md:max-w-[220px] mx-auto"
                                            onClick={zoomImageInHandler}
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