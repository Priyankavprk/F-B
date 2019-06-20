import React, { Component } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';
import Button from '../button';
import data from '../../constant/index';

class Card extends Component {
  componentDidMount() {
    console.log(data)
  }
  renderItem = ({ item }) => (
    <View style={styles.card}>
        <Image
          style={styles.image}
          source={{ uri: item.ImageUrl }}
        />
        <View style={styles.content}>
        {item.subitems.length > 0 &&
          <Button subItems={item.subitems}/>
        }
        </View>
        <View style={styles.body}>
          <Text style={styles.itemName}>{item.Name}</Text>
          <Text style={styles.price}>price</Text>
          <View style={{alignSelf: 'flex-end', flexDirection: 'row'}}>
          <TouchableOpacity>
            <Text style={styles.icon}> - </Text>
          </TouchableOpacity>
          <Text style={styles.itemName}>count</Text>
          <TouchableOpacity>
            <Text style={styles.icon}> + </Text>
          </TouchableOpacity>
          </View>
       </View>
    </View>
  );
  render() {
    return (
      <FlatList
        styles={styles.container}
        data={this.props.cardItems[0].fnblist}
        renderItem={this.renderItem}
      />
    );
  }
}


const mapStateToProps = state => {

};

const mapDispatchToProps = {

};

export default Card;
