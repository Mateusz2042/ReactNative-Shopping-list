import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { plusQuantity, minusQuantity, unsetNewListLoader } from '../../../actions/newList';

import styles from './styles';

class ProductItem extends Component {
  counterPlus = () => {
    this.props.plusQuantity(this.props.item);
    this.props.unsetNewListLoader();
  }

  counterMinus = () => {
    if (this.props.item.quantity !== 1) {
      this.props.minusQuantity(this.props.item);
      this.props.unsetNewListLoader();
    }
  }

  render() {
    const {
      onPress,
      item,
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.text}>
            {item.name}
          </Text>
          <TouchableOpacity style={styles.buttonCounter} onPress={this.counterPlus}>
            <Text style={styles.counterPlus}>
              {'+'}
            </Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>
            {item.quantity}
          </Text>
          <TouchableOpacity style={styles.buttonCounter} onPress={this.counterMinus}>
            <Text style={styles.counterMinus}>
              {'-'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={onPress}>
            <Text style={styles.textClose}>
              {'x'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

ProductItem.propTypes = {
  item: PropTypes.PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  onPress: PropTypes.func.isRequired,
  plusQuantity: PropTypes.func.isRequired,
  minusQuantity: PropTypes.func.isRequired,
  unsetNewListLoader: PropTypes.func.isRequired,
};

const mapStateToProps = ({ newList: { productsList } }) => ({
  productsList,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  plusQuantity,
  minusQuantity,
  unsetNewListLoader,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
