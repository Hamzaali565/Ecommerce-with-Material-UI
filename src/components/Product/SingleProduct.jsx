import React from 'react'
import { ProductImage } from '../../styles/products'
import Product from './Product'
import ProductMeta from './ProductMeta'

const SingleProduct = ({product, matches}) => {
  return (
    <Product>
        <ProductImage src={product.image}/>
        <ProductMeta product={product} matches={matches}  />
        

    </Product>
  )
}

export default SingleProduct