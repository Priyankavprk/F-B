import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './styles';
import ListComponent from './list';

class Card extends Component {
  render() {
    return (
      <FlatList
        keyExtractor={(item, index) => 'key'+item.TabName+index}
        styles={styles.container}
        data={this.props.cardItems[0].fnblist}
        renderItem={(item) => <ListComponent item={item}/>}
      />
    );
  }
}

Card.propTypes = {
  cardItems: PropTypes.array
}

export default Card;
