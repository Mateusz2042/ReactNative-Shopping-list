import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View } from 'react-native';

import Container from '../../../components/container';
import RadioButtons from '../../../components/radioButtons';
import Button from '../../../components/button';
import { getLanguages, setI18nLocale, translate } from '../../../utils/translation';
import { setLanguage } from '../../../actions/settings';
import styles from './styles';

class ApplicationLanguage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: props.language,
    };
  }

  onSelect = (option) => {
    this.setState({ selectedLanguage: option.key });
  }

  onPress = () => {
    const { selectedLanguage } = this.state;
    setI18nLocale(selectedLanguage);
    this.props.setLanguage(selectedLanguage);
  }

  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.radioButtons}>
          <RadioButtons
            options={getLanguages()}
            onSelect={this.onSelect}
            selected={this.state.selectedLanguage}
          />
        </View>
        <View style={{ flex: 0.5 }}>
          <Button
            style={styles.button}
            titleStyle={styles.titleStyle}
            title={translate('change_language')}
            onPress={this.onPress}
          />
        </View>
      </Container>
    );
  }
}

ApplicationLanguage.propTypes = {
  language: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired,
};

const mapStateToProps = ({ settings: { language } }) => ({
  language,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setLanguage,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationLanguage);
