import React,{useState} from 'react'
import { namespace } from '../../interface/ProductInterface'
import { ProductItem } from './ProductItem'

interface IProductProps {
  product: namespace.Product[]
  name?: string
}

export const ProductList: React.FC<IProductProps> = ({ product,name }) => {

  console.log(product)
  return (
    <div>
      ProductList {name}
      {product && product.map((p) => (<ProductItem product={p} />))}

    </div>
  )
}

