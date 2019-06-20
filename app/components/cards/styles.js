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
    borderColor: '#C7CACB',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  image: {
    height: 250,
    width: width - 65,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
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

    backgroundColor: '#000',
    marginTop: 20,
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
    margin: 10,
  },
  itemName: {
    color: '#C7CACB',
    fontSize: 20,
  },
  price: {
    color: '#C7CACB'
  },
  icon: {
    fontSize: 30,
    color: '#C7CACB'
  }
});
