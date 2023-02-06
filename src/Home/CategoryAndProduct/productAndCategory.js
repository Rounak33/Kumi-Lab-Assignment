import React from 'react'
import Category from './Category/category'
import Product from './Product/product'
import './productAndCategory.css'


function ProductAndCategory() {
  return (
    <div className='productAndCategoryContainer'>
        <Category />
        <Product />
        
    </div>
  )
}

export default ProductAndCategory