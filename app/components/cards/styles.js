import { Dimensions } from 'react-native';

const React = require('react-native');
const { StyleSheet } = React;
const { width, height } = Dimensions.get("window");

module.exports = StyleSheet.flatten({
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  card: {
    width: width - 60,
    height: 450,
    flexDirection: 'column',
    margin: 24,
    borderWidth: 1,
    borderColor: '#FFF'
  },
  image: {
    height: 250,
    width: width - 65,
  },
  subtitle: {
    width: width - 50,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignSelf: 'flex-end'
  },
  content: {
    flexDirection: 'column',
    height: 150,
    backgroundColor: '#000',
  },
  button: {
    padding: 5,
    height: 35,
    width: 100,
    borderWidth: 1,
    borderColor: '#FFF'
  },
  body: {
    flexDirection: 'column',
    padding: 20,
    marginTop: 20
  },
  itemName: {
    color: '#C7CACB',
    fontSize: 30
  },
  price: {
    color: '#C7CACB'
  },
  icon: {
    fontSize: 30,
    color: '#C7CACB'
  }
});
