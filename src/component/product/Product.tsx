import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ProductList } from './ProductList'
import { namespace } from '../../interface/ProductInterface'

const baseUrl = "https://dummyjson.com/products/"

export default function Product() {

  const [seach, setSeach] = useState<string>("")
  const [product, setProduct] = useState<namespace.Product[]>([])

  const clickSeach = async () => {
    try{
      const res: any  = await axios.get(baseUrl + 'search?q=' +seach)
      await setProduct(res.data.products)
    }catch(err){
      console.log(err)
    }      
  }

  let listProduct
  if(product === undefined) {
    console.log(product)
  }
  if (product) {
    listProduct = <ProductList  product={product} name="qwerty" />
    
  } 
  const getProduct = async () =>  {
    try{
      const res:any = await axios.get(baseUrl)
      await setProduct(res.data.products)
      console.log(product)
      
    }catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    getProduct()
  },[])

  return (
    <>
    <div className='m-5 p-5 border-4 border-black'>
        <div>
            Product
        </div>
        <div className='p-4'>
            <input 
                type='text'
                placeholder='seach' 
                className='bg-transparent py-1 text-gray-600 px-4 focus:outline-none border ' 
                value={seach} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setSeach(e.target.value)}}
            />
            <button className='py-1.5 px-4 transition-colors bg-gray-50 border active:bg-gray-200 font-medium border-gray-200 text-gray-900 rounded-lg hover:bg-gray-100 disabled:opacity-50'
            onClick={clickSeach}> 
            seach 
            </button>
        </div>
    </div>
    <div className='m-5 p-5'>
      {listProduct}
    </div>
    </>
  )
}
