import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import Container from '../../components/container';
import ExtendedPanel from '../../components/extendedPanel';
import { translate } from '../../utils/translation';
import styles from './styles';
import ShopItem from './shopItem';
import { removeShop, unsetLoader } from '../../actions/shop';
import Loader from '../../components/loader';

class Shops extends Component {
  renderItem = ({ item }) => (
    <ShopItem
      item={item}
      onPress={() => { this.props.removeShop(item); this.props.unsetLoader(); }}
    />
  );

  renderList = () => (
    <FlatList
      showsVerticalScrollIndicator
      data={this.props.list}
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
        <ExtendedPanel
          title={translate('add_shop')}
        />
        {
          this.props.isLoading
            ? <Loader />
            : this.renderList()
        }
      </Container>
    );
  }
}

Shops.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  removeShop: PropTypes.func.isRequired,
  unsetLoader: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

Shops.defaultProps = {
  isLoading: false,
};

const mapStateToProps = ({ shop: { list, isLoading } }) => ({
  list,
  isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  removeShop,
  unsetLoader,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Shops);
