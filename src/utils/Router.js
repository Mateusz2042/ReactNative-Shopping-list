import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import WelcomeScene from './scenes/welcome';
import SettingsScene from './scenes/settings';
import { setLanguage } from '../actions/settings';
import { init } from './translation';

class RouterComponent extends Component {
  constructor(props) {
    super(props);
    init(props.language, props.setLanguage);
  }

  render() {
    return (
      <Router>
        <Scene panHandlers={null} hideNavBar>
          {WelcomeScene()}
          {SettingsScene()}
        </Scene>
      </Router>
    );
  }
}

RouterComponent.propTypes = {
  setLanguage: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};

const mapStateToProps = ({ settings: { language } }) => ({ language });

const mapDispatchToProps = dispatch => bindActionCreators({
  setLanguage,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RouterComponent);
