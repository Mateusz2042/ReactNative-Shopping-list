import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Container from '../../components/container';
import RightArrowButton from '../../components/rightArrowButton';
import { translate } from '../../utils/translation';
import styles from './styles';
import ClearModal from '../../components/modalClear';
import { clearAll } from '../../actions/clear';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }

  setModalVisible = () => {
    this.setState({ isModalVisible: true });
  }

  optionNo = () => {
    this.setState({ isModalVisible: false });
  }

  renderModal = () => (
    <ClearModal
      isVisibleModal={this.state.isModalVisible}
      onPressNo={this.optionNo}
      onPressYes={() => { this.props.clearAll(); this.optionNo(); }}
    />
  )

  render() {
    return (
      <Container style={styles.container}>
        {
          this.state.isModalVisible
          && this.renderModal()
        }
        <View style={{ flex: 1 }}>
          <RightArrowButton
            title={translate('application_language')}
            onPress={() => Actions.applicationLanguage()}
          />
          <RightArrowButton
            title={translate('clear_all')}
            onPress={this.setModalVisible}
          />
        </View>
      </Container>
    );
  }
}

Settings.propTypes = {
  clearAll: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  clearAll,
}, dispatch);

export default connect(null, mapDispatchToProps)(Settings);
