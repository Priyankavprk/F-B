
import React, {Component} from 'react';
import {Platform, Text, View, TouchableOpacity, UIManager, LayoutAnimation, Dimensions } from 'react-native';

import styles from './styles';

const { width, height } = Dimensions.get("window");

class Slider extends Component {
  constructor(props) {
    super(props);
    if( Platform.OS === 'android' )
    {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.state = {
      summaryView: false,
      height: height / 9,
    }
  }

  slideAcive() {
    LayoutAnimation.configureNext( LayoutAnimation.Presets.easeInEaseOut );
     if (this.state.summaryView) {
       this.setState({
         summaryView: !this.state.summaryView,
         height: height / 9,
       })
     } else {
       this.setState({
         summaryView: !this.state.summaryView,
         height: height / 2,
       })
     }

  }

  render() {
      return (

          <View style={[styles.container, {height: this.state.summaryView ? height / 2 : height / 9}]}>
          <TouchableOpacity onPress={() => this.slideAcive()}>
           <Text style={{ margin: 20, fontSize: 20}}>AED  {this.props.cost} ^</Text>
          </TouchableOpacity>
           <Text style={{ margin: 20, fontSize: 25, fontWeight: 'bold'}}>PAY > </Text>
          </View>
      )
  }
}

export default Slider;
