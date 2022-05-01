import React,{useState} from 'react'
import { namespace } from '../../interface/ProductInterface'
import { ProductItem } from './ProductItem'

export const ProductList: React.FC< namespace.Product[] | undefined | null > = (props) => {
  const [productProps, setProductProps] = useState<namespace.Product[] | undefined | null>(props.product)
  
  console.log(productProps)
  console.log(props)
  return (
    <div>
      ProductList
      { productProps.map( () => ( <ProductItem/> ))}
                                
    </div>
  )
}


// export const ProductList = (props: namespace.Product[]|null|undefined) => {
//   //const [productProps, setproductProps] = useState<namespace.Product[] | undefined | null>(props)
//   //console.log(productProps)

//   const product: namespace.Product[]|null|undefined  = props
//   console.log(product)
//   console.log(props)

//   // let productUI
//   // if (props){
//   //   productUI = product.map( p=> ( <ProductItem/> ))
//   // }

//   return (
//     <div>
//       ProductList                  
//     </div>
//   )
// }

