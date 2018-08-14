import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import { translate } from '../../utils/translation';

import styles from './styles';

const BackNavigation = props => (
  <TouchableOpacity onPress={props.onPress} style={styles.container}>
    <Text style={styles.text}>
      {translate('back')}
    </Text>
  </TouchableOpacity>
);

BackNavigation.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default BackNavigation;
