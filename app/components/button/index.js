import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles'


class Button extends Component {
  renderItem = ({ item }) => (
    <TouchableOpacity
     style={styles.button}
    >
      <Text style={{color: '#FFF', textAlign: 'center'}}>{item.Name}</Text>
    </TouchableOpacity>
  );
  render() {
    return (
      <FlatList
        scrollEnabled={false}
        horizontal={true}
        styles={styles.container}
        data={this.props.subItems}
        renderItem={this.renderItem}
      />
    );
  }
}


const mapStateToProps = state => {

};

const mapDispatchToProps = {

};

export default Button;
