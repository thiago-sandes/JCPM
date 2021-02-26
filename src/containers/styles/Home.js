import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  error: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  list: {
    display: 'flex',
  },
  innerContainer: {
    display: 'flex',
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'stretch',
    marginTop: '5%',
  },
  flatListContainer: {
    paddingHorizontal: '2%',
    paddingBottom: '50%',
  },
});
