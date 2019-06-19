import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

// import { listRepos } from './reducer';

class Card extends Component {
  componentDidMount() {
    // this.props.listRepos('relferreira');
  }
  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
    </View>
  );
  render() {
    return (
      <FlatList
        styles={styles.container}
        data={[1,2,3,4,5,6,6,7,88,9]}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});

const mapStateToProps = state => {
  // let storedRepositories = state.repos.map(repo => ({ key: repo.id, ...repo }));
  // return {
  //   repos: storedRepositories
  // };
};

const mapDispatchToProps = {
  // listRepos
};

export default Card;
