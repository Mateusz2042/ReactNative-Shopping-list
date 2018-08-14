import { Dimensions } from 'react-native';

import { Colors } from '../../styles/colors';

const { width } = Dimensions.get('window');

export default {
  view: {
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  circleButton: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    backgroundColor: Colors.mediumOrange,
  },
  input: {
    marginBottom: 8,
    marginRight: 5,
    width: width / 1.45,
  },
  titleStyle: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 28,
    bottom: 23,
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 12,
    paddingBottom: 8,
  },
};
