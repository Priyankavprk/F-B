
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { connect } from 'react-redux';


import Card from './components/cards';
import Slider from './components/slider'
import data from './constant/index';
import { getData } from './actions';

const { width, height } = Dimensions.get("window");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabOnView: data.FoodList[0].TabName,
    }
  }

  componentWillMount() {
    this.props.getData(data);
  }

  tabOnChange(tabName) {
    this.setState({
      tabOnView: tabName
    })
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.tabOnView !== nextState.tabOnView) {
  //     return true
  //   }
  //   return false
  // }

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
           {this.props.foodList.length > 0 &&
             <Card cardItems={this.props.foodList.filter((item) => item.TabName === this.state.tabOnView)}/>
           }
          </ScrollView>
          <Slider />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  foodList: state.foodList
});

const mapDispatchToProps = {
  getData
};


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

export default connect(mapStateToProps, mapDispatchToProps)(App);
