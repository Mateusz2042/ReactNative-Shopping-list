import React, { Component } from 'react';
import { Animated, BackHandler } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Container from '../../components/container';
import Button from '../../components/button';
import styles from './styles';
import { translate } from '../../utils/translation';
import { clearNewList } from '../../actions/newList';

class Welcome extends Component {
  state = {
    fadeAnim: new Animated.Value(0),
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 1500,
      },
    ).start();
  }

  renderRegularButton = (title, onPress) => (
    <Button
      title={translate(title)}
      onPress={onPress}
    />
  )

  render() {
    return (
      <Container style={styles.container}>
        <Animated.View style={[styles.view, { opacity: this.state.fadeAnim }]}>
          {this.renderRegularButton('new_shopping_list', () => { this.props.clearNewList(); Actions.newList(); })}
          {this.renderRegularButton('shopping_lists', () => Actions.lists())}
          {this.renderRegularButton('my_shops', () => Actions.myShops())}
          {this.renderRegularButton('settings', () => Actions.settings())}
          {this.renderRegularButton('exit', () => BackHandler.exitApp())}
        </Animated.View>
      </Container>
    );
  }
}

Welcome.propTypes = {
  clearNewList: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  clearNewList,
}, dispatch);

export default connect(null, mapDispatchToProps)(Welcome);
