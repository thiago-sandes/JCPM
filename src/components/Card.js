import React from 'react';
import {View, Text, Image} from 'react-native';

// Styles
import styles from './styles/Card';

const Card = (props) => {
  const {title, key, year, img} = props;
  return (
    <View style={styles.list}>
      <View>
        <Image source={{uri: `${img}`}} style={styles.image} />
      </View>
      <View style={styles.name}>
        <Text style={styles.details} key={key}>
          {title}
        </Text>
        <Text>{year}</Text>
      </View>
    </View>
  );
};

export default Card;
