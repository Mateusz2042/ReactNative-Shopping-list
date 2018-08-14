import React, { Component, Fragment } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

import Container from '../../components/container';
import styles from './styles';
import SelectBoxes from '../../components/selectBoxes';
import { setListShopRegularField } from '../../actions/newList';
import { translate } from '../../utils/translation';
import Button from '../../components/button';

class NewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedShop: props.listShop,
    };
  }

  onSelect = (option) => {
    this.setState({ selectedShop: option });
    this.props.setListShopRegularField({ property: 'listShop', value: option });
  }

  renderErrorMessage = () => (
    <View style={styles.error}>
      <Text style={styles.textError}>
        {translate('not_choosed_shop')}
      </Text>
    </View>
  )

  renderRedirectToShops = () => (
    <View style={styles.redirect}>
      <Text style={styles.no_shops}>
        {translate('no_shops')}
      </Text>
      <Button title={translate('redirect')} onPress={() => Actions.myShops()} />
    </View>

  )

  render() {
    return (
      <Fragment>
        {this.props.showError && this.renderErrorMessage()}
        <Container>
          <View style={styles.view}>
            {this.props.list.length === 0 && this.renderRedirectToShops()}
            <SelectBoxes
              options={this.props.list}
              onSelect={this.onSelect}
              selected={this.state.selectedShop}
              centerStyle={styles.center}
            />
          </View>
        </Container>
      </Fragment>
    );
  }
}

NewList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  setListShopRegularField: PropTypes.func.isRequired,
  listShop: PropTypes.string.isRequired,
  showError: PropTypes.bool,
};

NewList.defaultProps = {
  showError: false,
};

const mapStateToProps = ({ shop: { list }, newList: { listShop, showError } }) => ({
  list,
  listShop,
  showError,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setListShopRegularField,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewList);
