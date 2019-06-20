import { Dimensions } from 'react-native';

const React = require('react-native');
const { StyleSheet } = React;
const { width, height } = Dimensions.get("window");

module.exports = StyleSheet.flatten({
  container: {
    backgroundColor: '#FFDB01',
    width: width,
    height: height / 9
  },

});
