
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

import styles from './styles';

const { width, height } = Dimensions.get("window");

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <View style={styles.container}>
       <Text style={{ margin: 20, fontSize: 20}}>AED  {this.props.cost} ^</Text>
       <Text style={{ margin: 20, fontSize: 25, fontWeight: 'bold'}}>PAY > </Text>
      </View>
    );
  }
}

export default Slider;
