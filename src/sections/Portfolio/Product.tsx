import React from 'react'
import type { Product as ProductType } from '../../types/types'

interface Props {
    product: ProductType
}

const Product: React.FC<Props> = ({ product }) => {
    return (
        <div>
        </div>
    )
}

export default Product