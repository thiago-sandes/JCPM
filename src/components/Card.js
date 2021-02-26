import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

// Styles
import styles from './styles/Card';

const Card = (props) => {
  const {title, key, year, img, onSelectResult} = props;
  return (
    <TouchableOpacity
      style={styles.list}
      onPress={() => {
        onSelectResult();
      }}>
      <View>
        <Image source={{uri: `${img}`}} style={styles.image} />
      </View>
      <View style={styles.name}>
        <Text style={styles.details} key={key}>
          {title}
        </Text>
        <Text>{year}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
