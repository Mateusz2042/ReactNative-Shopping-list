import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

import { translate } from '../../utils/translation';
import styles from './styles';
import { setError, hideError } from '../../actions/newList';

class NextNavigation extends Component {
  onPress = () => {
    if (this.props.listShop === '' || this.props.list.length === 0) {
      this.props.setError();
      setTimeout(() => this.props.hideError(), 2500);
    } else {
      Actions.products();
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={this.onPress} style={styles.container}>
        <Text style={styles.text}>
          {translate('next')}
        </Text>
      </TouchableOpacity>
    );
  }
}

NextNavigation.propTypes = {
  setError: PropTypes.func.isRequired,
  hideError: PropTypes.func.isRequired,
  listShop: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = ({
  newList: { listShop },
  shop: { list },
}) => ({
  listShop,
  list,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setError,
  hideError,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NextNavigation);
