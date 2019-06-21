import { Dimensions } from 'react-native';

const React = require('react-native');
const { StyleSheet } = React;
const { width, height } = Dimensions.get("window");

module.exports = StyleSheet.flatten({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFDB01',
    width: width,
    // height: height / 9
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFDB01',
    width: width,
    height: height / 2
  },

});
