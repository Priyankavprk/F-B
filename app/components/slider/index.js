
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

import styles from './styles';

const { width, height } = Dimensions.get("window");

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summaryView: false,
    }
  }

  render() {
      return (

          <View style={[styles.container, {height: this.state.summaryView ? height / 2 : height / 9}]}>
          <TouchableOpacity onPress={() => this.setState({summaryView: !this.state.summaryView})}>
           <Text style={{ margin: 20, fontSize: 20}}>AED  {this.props.cost} ^</Text>
          </TouchableOpacity>
           <Text style={{ margin: 20, fontSize: 25, fontWeight: 'bold'}}>PAY > </Text>
          </View>
      )
  }
}

export default Slider;
