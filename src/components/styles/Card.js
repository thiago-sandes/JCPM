import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {width: 80, height: 120, marginRight: 10, borderRadius: 7},
  list: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
    display: 'flex',
  },
  details: {
    fontSize: 18,
  },
  name: {
    width: '56%',
  },
});
