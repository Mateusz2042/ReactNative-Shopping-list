import { TouchableOpacity, View, Text } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

class CheckBox extends Component {
  renderDefaultItemView = () => {
    const { checked, title, centerStyle } = this.props;

    return (
      <View style={[styles.checkBox, styles.checkBoxContainer]}>
        <Text
          style={[
            styles.checkBoxText, centerStyle,
            checked ? styles.checkedBoxText : styles.uncheckedBoxText,
          ]}
        >
          {title}
        </Text>
      </View>
    );
  };

  render() {
    const { checked, onPress, childView } = this.props;

    return (
      <View style={[styles.checkBoxContainer,
        checked ? styles.checkedBoxView : styles.uncheckedBoxView]}
      >
        {childView != null ? childView : this.renderDefaultItemView()}
        <TouchableOpacity
          onPress={onPress}
          style={styles.checkBoxImageContainer}
        />
      </View>
    );
  }
}

CheckBox.propTypes = {
  checked: PropTypes.bool,
  onPress: PropTypes.func,
  title: PropTypes.string,
  childView: PropTypes.shape(),
  centerStyle: PropTypes.shape(),
};

CheckBox.defaultProps = {
  childView: null,
  checked: false,
  onPress: () => { },
  title: '',
  centerStyle: null,
};

export default CheckBox;
