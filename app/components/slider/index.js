
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
       <Text>newM</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {

};

const mapDispatchToProps = {

};

export default Slider;
