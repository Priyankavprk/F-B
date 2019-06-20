import React, { Component } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';
import Button from '../button';
import data from '../../constant/index';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  componentDidMount() {
    console.log(data)
  }

  minusValue(item) {
    console.log(';;;;;',item)
    this.setState({
      count: this.state.count - 1
    })
  }

  plusValue(item) {
    console.log('......',item)
    this.setState({
      count: this.state.count + 1
    })
    console.log('....ddd..',item,this.state.count)
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
          <TouchableOpacity onPress={() => {this.minusValue(item)}}>
            <Text style={styles.icon}> - </Text>
          </TouchableOpacity>
          <Text style={styles.itemName}>{this.state.count}</Text>
          <TouchableOpacity onPress={() => {this.plusValue(item)}}>
            <Text style={styles.icon}> + </Text>
          </TouchableOpacity>
          </View>
       </View>
    </View>
  );
  render() {
    return (
      <FlatList
        keyExtractor={(item, index) => 'key'+index}
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
