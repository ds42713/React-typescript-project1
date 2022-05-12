import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react'
import MainLayout from '../component/layouts/MainLayout';
import Product from '../component/product/Product';
export default function RouteConfig() {

  
    return (
      <Routes>		
              <Route path='/' element={<MainLayout/>} >
                  <Route path='product' element={<Product/>} />
              </Route>
      </Routes>
    )
  }
  