import React, { Component } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';
import Button from '../button';
import data from '../../constant/index';
import ListComponent from './list';

class Card extends Component {
  render() {
    return (
      <FlatList
        keyExtractor={(item, index) => 'key'+item.TabName+index}
        styles={styles.container}
        data={this.props.cardItems[0].fnblist}
        renderItem={(item, index) => <ListComponent item={item} index={index}/>}
      />
    );
  }
}

const mapStateToProps = state => ({
  foodList: state.foodList
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
