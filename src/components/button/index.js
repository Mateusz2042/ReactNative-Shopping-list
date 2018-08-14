import { TouchableOpacity, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Button = props => (
  <TouchableOpacity style={[styles.container, props.style]} onPress={props.onPress}>
    <Text style={[styles.text, props.titleStyle]}>
      {props.title}
    </Text>
  </TouchableOpacity>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.shape(),
  titleStyle: PropTypes.shape(),
};

Button.defaultProps = {
  style: null,
  titleStyle: null,
};

export default Button;
