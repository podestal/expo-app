import { StyleSheet, View, ScrollView} from 'react-native';
import Products from './src/components/Products';

export default function App() {

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Products />
      </View>
    </ScrollView>
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
  scrollView: {
    marginHorizontal: 20,
  },
});
