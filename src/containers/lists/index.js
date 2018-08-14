import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import Container from '../../components/container';
import styles from './styles';
import ListItem from './listItem';
import { removeList, unsetLoaderLists } from '../../actions/lists';
import Loader from '../../components/loader';

class Lists extends Component {
  componentDidMount() {
    console.log(this.props.isLoading);
  }

  renderItem = ({ item }) => (
    <ListItem
      item={item}
      onPress={() => { this.props.removeList(item); this.props.unsetLoaderLists(); }}
    />
  );

  renderList = () => (
    <FlatList
      showsVerticalScrollIndicator
      data={this.props.lists}
      renderItem={this.renderItem}
      ItemSeparatorComponent={() => <View style={styles.separatorStyle} />}
      ListFooterComponent={() => <View style={styles.separatorStyle} />}
      ListHeaderComponent={() => <View style={styles.separatorStyle} />}
      keyExtractor={(item, index) => String(item + index)}
    />
  )

  render() {
    return (
      <Container style={styles.view}>
        {
          this.props.isLoading
            ? <Loader />
            : this.renderList()
        }
      </Container>
    );
  }
}

Lists.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    shop: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      done: PropTypes.bool.isRequired,
    })).isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired,
  removeList: PropTypes.func.isRequired,
  unsetLoaderLists: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

Lists.defaultProps = {
  isLoading: false,
};

const mapStateToProps = ({ lists: { lists, isLoading } }) => ({
  lists,
  isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  removeList,
  unsetLoaderLists,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
