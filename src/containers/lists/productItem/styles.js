import { Colors } from '../../../styles/colors';

export default {
  container: {
    backgroundColor: Colors.white,
    height: 30,
    borderWidth: 1,
    borderColor: Colors.mediumOrange,
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    marginLeft: 10,
    color: Colors.black,
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    flex: 3,
  },
  quantity: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginHorizontal: 8,
    textAlign: 'center',
    flex: 1,
  },
  done: {
    backgroundColor: Colors.semiLightOrange,
  },
  image: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
