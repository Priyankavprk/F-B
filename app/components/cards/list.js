import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';
import Button from '../button';
import { addToCart, subFromCart } from '../../actions';

class ListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      itemSelected: this.props.item.item.subitems.length > 0 ? this.props.item.item.subitems[0] : null
    }
    this.changeSubItem = this.changeSubItem.bind(this)
  }

  minusValue(item) {
    if (this.state.count !== 0) {
      this.setState({
        count: this.state.count - 1,
      }, () => this.props.subFromCart(this.state.itemSelected ? parseInt(this.state.itemSelected.SubitemPrice) : parseInt(this.props.item.item.ItemPrice), item.Name, this.state.count))
    }
  }

  plusValue(item) {
    this.setState({
      count: this.state.count + 1,
    },() => this.props.addToCart(this.state.itemSelected ? parseInt(this.state.itemSelected.SubitemPrice) : parseInt(this.props.item.item.ItemPrice), item.Name, this.state.count))
  }

  changeSubItem(item) {
    this.setState({
      itemSelected: item
    })
  }

  render() {
    return (
      <View style={styles.card}>
          <Image
            style={styles.image}
            source={{ uri: this.props.item.item.ImageUrl }}
          />
          <View style={styles.content}>
          {this.props.item.item.subitems.length > 0 &&
            <Button subItems={this.props.item.item.subitems} onSubItemChange={this.changeSubItem} selectedItem={this.state.itemSelected}/>
          }
          </View>
          <View style={styles.body}>
            <Text style={styles.itemName}>{this.props.item.item.Name}</Text>
            <Text style={styles.price}>AED {this.state.itemSelected ? this.state.itemSelected.SubitemPrice : this.props.item.item.ItemPrice}</Text>
            <View style={{alignSelf: 'flex-end', flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => {this.minusValue(this.props.item.item)}}>
              <Text style={styles.icon}> - </Text>
            </TouchableOpacity>
            <Text style={styles.itemName}>{this.state.count}</Text>
            <TouchableOpacity onPress={() => {this.plusValue(this.props.item.item)}}>
              <Text style={styles.icon}> + </Text>
            </TouchableOpacity>
            </View>
         </View>
      </View>
    );
  }
}


const mapStateToProps = state => ({
  foodList: state.foodList
});

function bindAction(dispatch) {
  return {
   addToCart: (price, name, count) => dispatch(addToCart(price, name, count)),
   subFromCart: (price, name, count) => dispatch(subFromCart(price, name, count))
 }}


export default connect(mapStateToProps, bindAction)(ListComponent);
