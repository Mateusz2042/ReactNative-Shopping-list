import { Colors } from '../../../styles/colors';

export default {
  container: {
    backgroundColor: Colors.lightOrange,
    borderRadius: 9,
    height: 70,
    borderWidth: 2,
    borderColor: Colors.mediumOrange,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 5,
    height: 30,
    width: 30,
    position: 'absolute',
    right: 0,
    top: 0,
    flex: 1,
  },
  textClose: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
};
