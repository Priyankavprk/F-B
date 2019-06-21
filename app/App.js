
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Card from './components/cards';
import Slider from './components/slider'
import data from './constant/index';

const { width, height } = Dimensions.get("window");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabOnView: data.FoodList[0].TabName,
    }
  }

  tabOnChange(tabName) {
    this.setState({
      tabOnView: tabName
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 30, color: '#FFF', fontWeight: 'bold', margin: 20}}> F & B </Text>
        <View  style={{borderColor: '#C7CACB', width: width - 20, borderWidth: 1}}/>
          <View style={styles.tab}>
            <TouchableOpacity style={styles.tabStyle} onPress={() => this.tabOnChange(data.FoodList[0].TabName)}><Text style={{fontSize: 20, color: this.state.tabOnView === data.FoodList[0].TabName ? '#FFF' : '#B8BABB', fontWeight: this.state.tabOnView === data.FoodList[0].TabName ? 'bold' : null}}>{data.FoodList[0].TabName}</Text></TouchableOpacity>
            <View style={{borderLeftWidth: 1, borderLeftColor: '#C7CACB', height: 20, marginTop: 25}}/>
            <TouchableOpacity style={styles.tabStyle} onPress={() => this.tabOnChange(data.FoodList[1].TabName)}><Text style={{fontSize: 20, color: this.state.tabOnView === data.FoodList[1].TabName ? '#FFF' : '#B8BABB', fontWeight: this.state.tabOnView === data.FoodList[1].TabName ? 'bold' : null}}>{data.FoodList[1].TabName}</Text></TouchableOpacity>
          </View>
          <ScrollView>
           {data &&
             <Card cardItems={data.FoodList.filter((item) => item.TabName === this.state.tabOnView)}/>
           }
          </ScrollView>
          <Slider cost={this.props.totalCost}/>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  totalCost: state.totalCost
});

function bindAction(dispatch) {
  return {
 }}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  tab: {
    flexDirection: 'row',
    padding: 20
  },
  tabStyle: {
    margin: 20
  }
});

App.propTypes = {
  totalCost: PropTypes.number
}

export default connect(mapStateToProps, bindAction)(App);
