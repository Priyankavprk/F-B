import { Dimensions } from 'react-native';

const React = require('react-native');
const { StyleSheet } = React;
const { width, height } = Dimensions.get("window");

module.exports = StyleSheet.flatten({
  button: {
    padding: 10,
    height: 40,
    width: 75,
    borderWidth: 1,
    borderColor: '#FFF',
    margin: 10
  }
});
