import React,{useState} from 'react'
import { namespace } from '../../interface/ProductInterface'
import { ProductItem } from './ProductItem'
import { Container } from '@mui/material'
interface IProductProps {
  product: namespace.Product[]
  name?: string
}

export const ProductList: React.FC<IProductProps> = ({ product,name }) => {

  console.log(product)
  return (
    <div>
      ProductList {name}
      <div className='bg-red-500 flex flex-wrap justify-around'>
        {product && product.map((p) => (<ProductItem product={p} />))}\
      </div>

    </div>
  )
}

