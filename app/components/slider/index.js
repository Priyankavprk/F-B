
import React, {Component} from 'react';
import {Platform, Text, FlatList, View, TouchableOpacity, UIManager, LayoutAnimation, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

  renderItem = ({ item }) => (
    <View style={styles.list}>
      <Text style={styles.listItem}>{item} ({this.props.cartItems[item][0]})</Text>
      <Text style={styles.listItem}>{this.props.cartItems[item][0] * this.props.cartItems[item][1]}</Text>
    </View>
  );

  render() {
      return (
          <View style={[styles.container, {height: this.state.summaryView ? height / 2 : height / 9}]}>
           {this.state.summaryView && Object.keys(this.props.cartItems).length > 0 &&
             <View style={{flexDirection: 'column'}}>
              <Text style={{fontSize: 25, fontWeight: 'bold', margin: 5}}>F & B Summary</Text>
              <FlatList
                keyExtractor={(item, index) => 'key'+index}
                data={Object.keys(this.props.cartItems)}
                renderItem={this.renderItem}
              />
             </View>
           }
           <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
           <TouchableOpacity onPress={() => this.slideAcive()}>
            <Text style={{ margin: 20, fontSize: 20}}>AED  {this.props.cost} ^</Text>
           </TouchableOpacity>
           <Text style={{ margin: 20, fontSize: 25, fontWeight: 'bold'}}>PAY > </Text>
           </View>
          </View>
      )
  }
}

const mapStateToProps = state => ({
  cartItems: state.cartItems
});

function bindAction(dispatch) {
  return {

}}

Slider.propTypes = {
  text: PropTypes.number,
  cartItems: PropTypes.object,
}


export default connect(mapStateToProps, bindAction)(Slider);
