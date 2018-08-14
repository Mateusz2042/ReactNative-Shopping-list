import { Dimensions } from 'react-native';

import { Colors } from '../../styles/colors';

const { height } = Dimensions.get('window');

export default {
  view: {
    marginTop: height / 5,
  },
  container: {
    backgroundColor: Colors.mediumOrange,
  },
};
