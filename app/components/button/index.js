import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles'


class Button extends Component {
  render() {
    return (
      <View style={styles.subtitle}>
       <TouchableOpacity
        style={styles.button}
       >
         <Text style={{color: '#FFF', textAlign: 'center'}}>NORMAL</Text>
       </TouchableOpacity>
       <TouchableOpacity
        style={styles.button}
       >
         <Text style={{color: '#FFF', textAlign: 'center'}}>REGULAR</Text>
       </TouchableOpacity>
       <TouchableOpacity
        style={styles.button}
       >
         <Text style={{color: '#FFF', textAlign: 'center'}}>LARGE</Text>
       </TouchableOpacity>
     </View>
    );
  }
}


const mapStateToProps = state => {

};

const mapDispatchToProps = {

};

export default Button;
