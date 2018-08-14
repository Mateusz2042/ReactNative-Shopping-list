import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import { translate } from '../../utils/translation';
import styles from './styles';

const TextWithHeader = props => (
  <View style={[styles.container, props.style]}>
    <Text style={[styles.header, props.styleHeader]}>
      {translate(props.header)}
    </Text>
    <Text style={[styles.text, props.styleText]}>
      {props.item}
    </Text>
  </View>
);

TextWithHeader.propTypes = {
  item: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  header: PropTypes.string.isRequired,
  style: PropTypes.shape(),
  styleHeader: PropTypes.shape(),
  styleText: PropTypes.shape(),
};

TextWithHeader.defaultProps = {
  style: null,
  styleHeader: null,
  styleText: null,
};

export default TextWithHeader;
