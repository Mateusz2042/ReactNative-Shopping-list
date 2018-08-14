import {
  View, Keyboard, FlatList, Text,
} from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Container from '../../components/container';
import styles from './styles';
import Input from '../../components/input';
import Button from '../../components/button';
import { addNewProduct, removeProduct, unsetNewListLoader } from '../../actions/newList';
import ProductItem from './productItem';
import Loader from '../../components/loader';
import { check_repeating } from '../../selectors/product';
import { translate } from '../../utils/translation';

class ProductsChoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRepeatError: false,
      product: '',
    };
  }

  onPress = () => {
    if (this.state.product !== '') {
      if (!check_repeating(this.props.productsList, this.state.product)) {
        this.props.addNewProduct(
          { name: this.state.product.trim(), quantity: 1, done: false },
        );
        this.setState({ product: '' });
        Keyboard.dismiss();
      } else {
        this.setState({
          showRepeatError: true,
        });
        setTimeout(() => this.setState({
          showRepeatError: false,
        }), 2000);
      }
    }
  }

  onChangeText = (val) => {
    this.setState({ product: val });
  }

  renderItem = ({ item }) => (
    <ProductItem
      item={item}
      onPress={() => { this.props.removeProduct(item); this.props.unsetNewListLoader(); }}
    />
  );

  renderRepeatError = () => (
    <Text style={styles.error}>
      {translate('repeat_info_product')}
    </Text>
  )

  renderList = () => (
    <FlatList
      showsVerticalScrollIndicator
      data={this.props.productsList}
      renderItem={this.renderItem}
      ItemSeparatorComponent={() => <View style={styles.separatorStyle} />}
      ListFooterComponent={() => <View style={styles.separatorStyle} />}
      ListHeaderComponent={() => <View style={styles.separatorStyle} />}
      keyExtractor={(item, index) => String(item + index)}
    />
  )

  render() {
    return (
      <Container>
        <View style={styles.view}>
          <View style={{ flexDirection: 'row' }}>
            <Input
              style={styles.input}
              value={this.state.product}
              onChangeText={val => this.onChangeText(val)}
            />
            <Button
              titleStyle={styles.titleStyle}
              style={styles.circleButton}
              title="+"
              onPress={this.onPress}
            />
          </View>
          {this.state.showRepeatError && this.renderRepeatError()}
          {
            this.props.isLoading
              ? <Loader />
              : this.renderList()
          }
        </View>
      </Container>
    );
  }
}

ProductsChoice.propTypes = {
  productsList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    done: PropTypes.bool.isRequired,
  })).isRequired,
  addNewProduct: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
  unsetNewListLoader: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

ProductsChoice.defaultProps = {
  isLoading: false,
};

const mapStateToProps = ({ newList: { productsList, isLoading } }) => ({
  productsList,
  isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addNewProduct,
  removeProduct,
  unsetNewListLoader,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductsChoice);
