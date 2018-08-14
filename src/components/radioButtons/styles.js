import { StyleSheet } from 'react-native';

import { Colors } from '../../styles/colors';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingHorizontal: 24,
    backgroundColor: Colors.lightGrey,
  },
  lightGreyLine: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    marginHorizontal: 20,
    height: 1,
    backgroundColor: Colors.lightGrey,
  },
  navBarShadow: {
    top: -75,
    zIndex: -1,
  },
});

export default Styles;
