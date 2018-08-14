import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { translate } from '../../utils/translation';

import styles from './styles';

const NavigationTitle = props => (
  <Text
    numberOfLines={1}
    ellipsizeMode="tail"
    style={[styles.text, props.style]}
  >
    {translate(props.title)}
  </Text>
);

NavigationTitle.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.shape(),
};

NavigationTitle.defaultProps = {
  style: null,
};

export default NavigationTitle;
