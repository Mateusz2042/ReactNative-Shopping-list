import { Dimensions } from 'react-native';

import { Colors } from '../../styles/colors';

const { height: windowHeight } = Dimensions.get('window');

export default {
  view: {
    justifyContent: 'center',
    marginTop: 40,
  },
  center: {
    textAlign: 'center',
    paddingLeft: 0,
  },
  error: {
    marginTop: 20,
    backgroundColor: 'red',
  },
  textError: {
    paddingVertical: 5,
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  no_shops: {
    textAlign: 'center',
    color: Colors.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
  redirect: {
    marginTop: windowHeight / 4,
  },
};
