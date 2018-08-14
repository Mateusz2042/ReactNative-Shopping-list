import { View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Container = props => (
  <View style={[styles.container, props.style]}>
    {props.children}
  </View>
);

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  style: PropTypes.shape(),
};

Container.defaultProps = {
  style: null,
};

export default Container;
