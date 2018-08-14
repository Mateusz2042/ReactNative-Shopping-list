import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';

const styles = {
  checkBox: {
    height: 68,
  },
  checkBoxContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBoxText: {
    flex: 1,
    paddingLeft: 20,
  },
  checkedBoxText: {
    fontFamily: Fonts.fontBold,
    color: Colors.white,
    fontWeight: 'bold',
  },
  uncheckedBoxText: {
    fontFamily: Fonts.fontSecondary,
    color: Colors.black,
    fontWeight: 'bold',
  },
  checkedBoxView: {
    backgroundColor: Colors.mediumOrange,
  },
  disabledBoxView: {
    backgroundColor: Colors.white,
  },
  uncheckedBoxView: {
    backgroundColor: Colors.white,
  },
};

export default styles;
