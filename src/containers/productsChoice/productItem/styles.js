import { Colors } from '../../../styles/colors';

export default {
  container: {
    backgroundColor: Colors.lightOrange,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.mediumOrange,
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    marginLeft: 10,
    color: Colors.white,
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    flex: 5,
  },
  closeButton: {
    height: 30,
    width: 30,
    flex: 1,
  },
  textClose: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  counterPlus: {
    alignSelf: 'center',
    color: Colors.black,
    fontSize: 24,
    fontWeight: 'bold',
    bottom: 2.5,
    flex: 1,
  },
  counterMinus: {
    alignSelf: 'center',
    color: Colors.black,
    fontSize: 28,
    fontWeight: 'bold',
    bottom: 6,
    flex: 1,
  },
  buttonCounter: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    backgroundColor: Colors.white,
  },
  quantity: {
    color: Colors.white,
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginHorizontal: 8,
    textAlign: 'center',
    flex: 1,
  },
};
