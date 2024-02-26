import { StyleSheet, Text, View, Image, Button } from 'react-native';
import products from './assets/data/products';
import Products from './src/components/Products';

export default function App() {

  const product = products[0]

  return (
    <View style={styles.container}>
      <Products />
      {/* <Image source={{uri: products[0].image}} style={styles.image}/>
      <Text style={styles.title}>{products[0].name}</Text>
      <Text style={styles.sub_title}>The best peperoni pizza that you ever will try</Text>
      <Text style={styles.price}>{products[0].price}</Text>
      <Image source={{uri: products[1].image}} style={styles.image}/>
      <Text style={styles.title}>{products[1].name}</Text>
      <Text style={styles.sub_title}>The best peperoni pizza that you ever will try</Text>
      <Text style={styles.price}>{products[1].price}</Text>
      <Button 
          style={styles.button}
          title="Learn More"
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
  button: {
    backgroundColor: '#000',
    fontSize: 20
  },
});
