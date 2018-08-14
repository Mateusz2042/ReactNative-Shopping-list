import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity, Text, View, Image,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import TextWithHeader from '../../../components/textWithHeader';
import styles from './styles';
import Done from '../../../assets/icons/checked.png';
import { doneList } from '../../../selectors/listDone';

const ListItem = props => (
  <TouchableOpacity onPress={() => Actions.listDetails(props.item)} style={styles.container}>
    <TouchableOpacity style={styles.closeButton} onPress={props.onPress}>
      <Text style={styles.textClose}>
        {'x'}
      </Text>
    </TouchableOpacity>
    {doneList(props.item.products) && <Image source={Done} style={styles.done} />}
    <Text style={styles.text}>
      {props.item.shop}
    </Text>
    <View style={styles.row}>
      <TextWithHeader item={props.item.date} header="create_date" style={styles.item} />
      <TextWithHeader item={props.item.products.length} header="quantity_products" style={styles.item} />
    </View>
  </TouchableOpacity>
);

ListItem.propTypes = {
  item: PropTypes.PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ListItem;
