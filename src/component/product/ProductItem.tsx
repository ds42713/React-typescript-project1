import React from 'react'
import { namespace } from '../../interface/ProductInterface'

interface IProductProps {
  product: namespace.Product
}

export const ProductItem:React.FC<IProductProps> = ({product}) => {


  return (
    <div>
      ProductItem     
      {product.title}
    </div>
  )
}
