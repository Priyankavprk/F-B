import { Dimensions } from 'react-native';

const React = require('react-native');
const { StyleSheet } = React;
const { width, height } = Dimensions.get("window");

module.exports = StyleSheet.flatten({
  subtitle: {
    width: width - 50,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignSelf: 'flex-end'
  },
  button: {
    padding: 5,
    height: 35,
    width: 100,
    borderWidth: 1,
    borderColor: '#FFF'
  }
});
