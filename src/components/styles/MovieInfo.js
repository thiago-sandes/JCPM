import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
  },
  prod: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 8,
  },
  lower: {
    alignItems: 'flex-start',
    marginLeft: 8,
  },
  text: {
    fontSize: 17,
    padding: 5,
  },
  shadow: {
    shadowColor: '#202020',
    shadowOffset: {width: 5, height: 5},
    shadowRadius: 5,
    shadowOpacity: 0.39,
    elevation: 2,
  },
  img: {
    width: 210,
    height: 290,
    borderRadius: 7,
  },
  titleText: {fontSize: 20, fontWeight: 'bold', padding: 10},
  releasedText: {fontSize: 17},
  boldText: {fontWeight: 'bold'},
});
