import React from 'react'
import { Text, Image, StyleSheet, View, ScrollView } from 'react-native'

const Product = ({ product }) => {
  return (
    <>
        <Text style={styles.title}>{product.name}</Text>
        <Image source={{uri: product.image}} style={styles.image}/>
        <Text style={styles.title}>{product.price}</Text>
    </>
  )
}

// <Image source={{uri: products[1].image}} style={styles.image}/>
// <Text style={styles.title}>{products[1].name}</Text>
// <Text style={styles.sub_title}>The best peperoni pizza that you ever will try</Text>
// <Text style={styles.price}>{products[1].price}</Text>

const styles = StyleSheet.create({
    image: {
      width: 100,
      height: 100,
    },
    title: {
      fontSize:20,
      fontWeight:'bold',
      margin: 20,
    },
    sub_title: {
      fontSize:16,
    },
    price: {
      margin: 10,
      fontSize: 12,
    },
  });

export default Product