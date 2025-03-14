import React, { useState } from 'react'
import { Product } from '@/types/types'

type Props = {
    product: Product
    isSelected: boolean
    img: string
}

const ProductImage: React.FC<Props> = ({ product, isSelected, img }) => {
    const zoomImageWrapClasses =
        'fixed cursor-zoom-out top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 flex items-center justify-center'
    const zoomImageClasses = 'max-w-none h-[calc(100%-100px)] w-auto'

    const [zoomedImage, setZoomedImage] = useState<string | null>(null)

    function setZoomedImageHandler(item: string): void {
        if (zoomedImage === item) {
            setZoomedImage(null)
            return
        }

        setZoomedImage(item)
    }

    return (
        <div
            className={
                (isSelected ? '' : 'hidden') +
                ' ' +
                (zoomedImage === img ? zoomImageWrapClasses : 'cursor-zoom-in') +
                ' transition-all duration-300 hover:scale-105'
            }
            onClick={() => setZoomedImageHandler(img)}
        >
            <img
                data-src={img}
                width="220"
                height="468"
                alt={product.title}
                className={
                    'transition-all duration-300 mx-auto drop-shadow-md' +
                    ' ' +
                    (zoomedImage === img
                        ? zoomImageClasses
                        : 'max-w-auto md:max-w-[220px]')
                }
            />
        </div>
    )
}

export default ProductImage
