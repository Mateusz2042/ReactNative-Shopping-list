import { FlatList, TouchableWithoutFeedback, View } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CheckBox from '../checkBox';
import Styles from './styles';

class SelectBoxes extends Component {
  renderOption = (onSelect, option, renderRowItem) => {
    const selected = option === this.props.selected;

    return (
      <TouchableWithoutFeedback onPress={() => onSelect(option)}>
        <View>
          <CheckBox
            checked={selected}
            title={option.toString()}
            childView={renderRowItem ? renderRowItem(option, selected) : undefined}
            centerStyle={this.props.centerStyle}
          />
        </View>
      </TouchableWithoutFeedback>);
  };

  render() {
    const {
      options, selected, onSelect, renderRowItem,
    } = this.props;

    return (
      <FlatList
        keyboardShouldPersistTaps="handled"
        style={Styles.list}
        data={options}
        numColumns={1}
        extraData={selected}
        renderItem={({ item }) => this.renderOption(onSelect, item, renderRowItem)}
        keyExtractor={(item, index) => item + index}
        showsVerticalScrollIndicator={false}
      />
    );
  }
}

SelectBoxes.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number]),
  renderRowItem: PropTypes.func,
  centerStyle: PropTypes.shape(),
};

SelectBoxes.defaultProps = {
  selected: '',
  renderRowItem: undefined,
  options: [],
  centerStyle: null,
};

export default SelectBoxes;
