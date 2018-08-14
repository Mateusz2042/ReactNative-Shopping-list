import {
  TouchableOpacity, Text, View, Image,
} from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './styles';
import Button from '../button';
import Input from '../input';
import { addNewShop } from '../../actions/shop';
import { translate } from '../../utils/translation';
import { check_repeating } from '../../selectors/shop';
import arrowUp from '../../assets/icons/arrowUp.png';
import arrowDown from '../../assets/icons/arrowDown.png';

class ExtendedPanel extends Component {
  state = {
    extended: false,
    showRepeatError: false,
    shop: '',
  }

  onChangeText = (val) => {
    this.setState({ shop: val });
  }

  onPress = () => {
    if (this.state.shop !== '') {
      if (!check_repeating(this.props.list, this.state.shop)) {
        this.props.addNewShop(this.state.shop.trim());
        this.setState({ shop: '' });
        this.setState({ extended: false });
      } else {
        this.setState({
          showRepeatError: true,
        });
        setTimeout(() => this.setState({
          showRepeatError: false,
        }), 2000);
      }
    }
  }

  toggleExtended = () => {
    const { extended } = this.state;

    this.setState({
      extended: !extended,
    });
  }

  renderRepeatError = () => (
    <Text style={styles.error}>
      {translate('repeat_info')}
    </Text>
  )

  renderBody = () => (
    <View>
      <View style={styles.viewButton}>
        <Input
          style={styles.input}
          onChangeText={val => this.onChangeText(val)}
          value={this.state.shop}
        />
        <Button
          titleStyle={styles.titleStyle}
          style={styles.circleButton}
          title="+"
          onPress={this.onPress}
        />
      </View>
      {this.state.showRepeatError && this.renderRepeatError()}
    </View>
  )

  render() {
    return (
      <TouchableOpacity
        style={[styles.container, this.props.style]}
        onPress={this.toggleExtended}
      >
        <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.text, this.props.titleStyle]}>
            {this.props.title}
          </Text>
          {
            this.state.extended
              ? (
                <View style={styles.image}>
                  <Image source={arrowUp} />
                </View>
              )
              : (
                <View style={styles.image}>
                  <Image source={arrowDown} />
                </View>
              )
          }
        </View>
        {
          this.state.extended
          && this.renderBody()
        }
      </TouchableOpacity>
    );
  }
}

ExtendedPanel.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.shape(),
  titleStyle: PropTypes.shape(),
  addNewShop: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ExtendedPanel.defaultProps = {
  style: null,
  titleStyle: null,
};

const mapStateToProps = ({ shop: { list } }) => ({ list });

const mapDispatchToProps = dispatch => bindActionCreators({
  addNewShop,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ExtendedPanel);
