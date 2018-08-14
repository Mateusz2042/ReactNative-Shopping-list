import { Dimensions } from 'react-native';

import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';

const { width } = Dimensions.get('window');

const styles = {
  container: {
    borderWidth: 3,
    borderRadius: 9,
    borderColor: Colors.darkOrange,
    backgroundColor: Colors.white,
    alignItems: 'flex-start',
    marginVertical: 8,
    paddingHorizontal: 12,
  },
  text: {
    flex: 4,
    paddingVertical: 20,
    fontFamily: Fonts.fontBold,
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.black,
  },
  viewButton: {
    flexDirection: 'row',
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
    width: width / 1.61,
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
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 7,
  },
};

export default styles;
