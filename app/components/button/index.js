import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles'


class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedName: this.props.selectedItem.Name
    }
  }

  tabOnClick (item) {
    this.props.onSubItemChange(item)
    this.setState({
      selectedName: item.Name
    })
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (this.props.selectedItem.Name !== nextProps.selectedItem.Name) {
      return true
    }
    return false
  }

  renderItem = ({ item }) => (
    <TouchableOpacity style={[styles.button, {backgroundColor: this.props.selectedItem.Name === item.Name ? '#FFDB01' : '#000'} ]} onPress={() => this.tabOnClick(item)}>
      <Text style={{color: '#FFF', textAlign: 'center'}}>{item.Name}</Text>
    </TouchableOpacity>
  );

  render() {
    return (
      <FlatList
        extraData={this.state}
        scrollEnabled={false}
        keyExtractor={(item, index) => 'key'+index}
        horizontal={true}
        data={this.props.subItems}
        renderItem={(item, index) => this.renderItem(item, index)}
      />
    );
  }
}

Button.propTypes = {
  subItems: PropTypes.array,
  onSubItemChange: PropTypes.func,
  selectedItem: PropTypes.object
}

export default Button;
