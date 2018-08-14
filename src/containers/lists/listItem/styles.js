import { Colors } from '../../../styles/colors';

export default {
  container: {
    backgroundColor: Colors.lightOrange,
    borderRadius: 9,
    height: 200,
    borderWidth: 2,
    borderColor: Colors.mediumOrange,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.white,
    fontSize: 24,
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
  row: {
    marginTop: 30,
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    alignSelf: 'center',
  },
  done: {
    marginTop: 5,
    marginLeft: 5,
    position: 'absolute',
    left: 0,
    top: 0,
    flex: 1,
  },
};
