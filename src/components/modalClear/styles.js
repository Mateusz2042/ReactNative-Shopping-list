import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'white',
  },
  yesSubmitButton: {
    marginTop: 32,
    marginBottom: 32,
    flex: 1,
    marginRight: 5,
    backgroundColor: Colors.mediumOrange,
  },
  noSubmitButton: {
    marginTop: 32,
    marginBottom: 32,
    flex: 1,
    backgroundColor: Colors.mediumOrange,
  },
  titleStyle: {
    color: Colors.white,
  },
  textError: {
    color: Colors.black,
    textAlign: 'center',
    marginTop: 32,
    fontFamily: Fonts.fontHeading,
    height: 30,
    fontSize: 15,
    fontWeight: 'bold',
  },
  view: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};

export default styles;
