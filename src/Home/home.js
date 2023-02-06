import React from 'react'
import ProductAndCategory from './CategoryAndProduct/productAndCategory'
import Header from './Header/header'
import './home.css'

function Home() {
  return (
    <div className='homeContainer'>
        <Header />
        <ProductAndCategory />
    </div>
  )
}

export default Home