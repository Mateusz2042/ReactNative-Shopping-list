import React, { Component } from 'react';
import { FlatList, TouchableWithoutFeedback, View } from 'react-native';
import PropTypes from 'prop-types';

import CheckBox from '../checkBox';
import Styles from './styles';

class RadioButtons extends Component {
  renderOption = (onSelect, option, renderChildRow) => {
    const selected = option.key === this.props.selected;

    return (
      <TouchableWithoutFeedback onPress={() => onSelect(option)}>
        <View>
          <CheckBox
            checked={selected}
            title={option.value.toString()}
            childView={renderChildRow ? renderChildRow(option.value, selected) : undefined}
          />
        </View>
      </TouchableWithoutFeedback>);
  };

  render() {
    const {
      options, selected, onSelect, renderChildRow,
    } = this.props;

    return (
      <FlatList
        keyboardShouldPersistTaps="handled"
        style={Styles.list}
        data={options}
        numColumns={1}
        extraData={selected}
        renderItem={({ item }) => this.renderOption(onSelect, item, renderChildRow)}
        keyExtractor={(item, index) => item + index}
        showsVerticalScrollIndicator={false}
      />
    );
  }
}

RadioButtons.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number]).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  })),
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number]),
  renderChildRow: PropTypes.func,
};

RadioButtons.defaultProps = {
  selected: '',
  renderChildRow: undefined,
  options: [],
};

export default RadioButtons;
