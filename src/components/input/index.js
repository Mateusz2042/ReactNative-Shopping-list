import { TextInput } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

class Input extends Component {
  componentDidMount() {
    console.log('');
  }

  render() {
    return (
      <TextInput
        underlineColorAndroid="transparent"
        style={[styles.input, this.props.style]}
        onChangeText={this.props.onChangeText}
        value={this.props.value}
      />
    );
  }
}

Input.propTypes = {
  style: PropTypes.shape().isRequired,
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string,
};

Input.defaultProps = {
  value: '',
};

export default Input;
