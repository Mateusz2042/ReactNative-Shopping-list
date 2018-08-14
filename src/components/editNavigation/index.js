import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { translate } from '../../utils/translation';
import styles from './styles';

class EditNavigation extends Component {
  redirectToEdit = () => {
    Actions.newList();
  }

  render() {
    return (
      <TouchableOpacity onPress={this.redirectToEdit} style={styles.container}>
        <Text style={styles.text}>
          {translate('edit')}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default EditNavigation;
