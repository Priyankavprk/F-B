import { Dimensions } from 'react-native';

const React = require('react-native');
const { StyleSheet } = React;
const { width, height } = Dimensions.get("window");

module.exports = StyleSheet.flatten({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#FFDB01',
    width: width,
  },
  list: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   margin: 10
 },
 listItem: {
   color: '#000',
   fontSize: 20,
   fontWeight: '700'
 }
});
