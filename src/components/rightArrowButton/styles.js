import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';

const styles = {
  container: {
    borderWidth: 3,
    borderRadius: 9,
    borderColor: Colors.darkOrange,
    backgroundColor: Colors.white,
    alignItems: 'flex-start',
    marginVertical: 8,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  text: {
    flex: 3.5,
    paddingVertical: 20,
    fontFamily: Fonts.fontBold,
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.black,
  },
  image: {
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
};

export default styles;
