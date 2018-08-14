import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity, BackHandler,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import styles from './styles';
import { translate } from '../../utils/translation';
import { clearNewList } from '../../actions/newList';

class DrawerContent extends Component {
  componentDidMount() {
    console.log('drawer');
  }

  renderButton = (title, onPress) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>
        {translate(title)}
      </Text>
    </TouchableOpacity>
  )

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.menuView}>
          <Text style={styles.menuText}>
            {'MENU'}
          </Text>
        </View>
        <View style={styles.view}>
          {this.renderButton('new_shopping_list', () => { this.props.clearNewList(); Actions.newList(); })}
          {this.renderButton('shopping_lists', () => Actions.lists())}
          {this.renderButton('my_shops', () => Actions.myShops())}
          {this.renderButton('settings', () => Actions.settings())}
          {this.renderButton('exit', () => BackHandler.exitApp())}
        </View>
      </View>
    );
  }
}

DrawerContent.propTypes = {
  clearNewList: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  clearNewList,
}, dispatch);

export default connect(null, mapDispatchToProps)(DrawerContent);
