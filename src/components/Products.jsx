import React from 'react'
import { Text } from 'react-native'
import products from '../../assets/data/products'
import Product from './Product'

const Products = () => {
  return (
    <>
        {products.map(product => (
            <Product 
                key={product.id}
                product={product}
            />
        ))}
    </>
  )
}

export default Products