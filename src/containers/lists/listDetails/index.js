import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import PropTypes from 'prop-types';
import { sortBy } from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Container from '../../../components/container';
import styles from './styles';
import ProductItem from '../productItem';
import { translate } from '../../../utils/translation';
import { markAsDone, markAsInProgress, unsetLoaderLists } from '../../../actions/lists';
import Loader from '../../../components/loader';
import { setListShopRegularField } from '../../../actions/newList';

class ListDetails extends Component {
  componentDidMount() {
    this.prepareToEdit();
  }

  onPress = (item) => {
    if (item.done === false) {
      this.props.markAsDone(item);
      this.props.unsetLoaderLists();
    } else {
      this.props.markAsInProgress(item);
      this.props.unsetLoaderLists();
    }
  }

  prepareToEdit = () => {
    this.props.setListShopRegularField({ property: 'productsList', value: this.props.products });
    this.props.setListShopRegularField({ property: 'listShop', value: this.props.shop });
    this.props.setListShopRegularField({ property: 'id_editing', value: this.props.id });
  }

  renderItem = ({ item }) => (
    <ProductItem
      item={item}
      onPress={() => this.onPress(item)}
    />
  );

  renderList = () => (
    <FlatList
      showsVerticalScrollIndicator
      data={sortBy(this.props.products, e => e.done === true)}
      renderItem={this.renderItem}
      ItemSeparatorComponent={() => <View style={styles.separatorStyle} />}
      ListFooterComponent={() => <View style={styles.separatorStyle} />}
      ListHeaderComponent={() => <View style={styles.separatorStyle} />}
      keyExtractor={(item, index) => String(item + index)}
    />
  )

  render() {
    const {
      shop,
      date,
      isLoading,
    } = this.props;

    return (
      <Container>
        <View style={styles.view}>
          <View style={styles.center}>
            <Text style={styles.shop}>
              {shop}
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.dateDes}>
                {`${translate('create_date')}:`}
              </Text>
              <Text style={styles.date}>
                {date}
              </Text>
            </View>
          </View>
          {
            isLoading ? <Loader /> : this.renderList()
          }
        </View>
      </Container>
    );
  }
}

ListDetails.propTypes = {
  shop: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    done: PropTypes.bool.isRequired,
  })).isRequired,
  markAsDone: PropTypes.func.isRequired,
  markAsInProgress: PropTypes.func.isRequired,
  unsetLoaderLists: PropTypes.func.isRequired,
  setListShopRegularField: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ lists: { isLoading } }) => ({ isLoading });

const mapDispatchToProps = dispatch => bindActionCreators({
  markAsDone,
  markAsInProgress,
  unsetLoaderLists,
  setListShopRegularField,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListDetails);
