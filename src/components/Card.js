import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Styles
import styles from './styles/Card';

const Card = (props) => {
  const {title, id, year, img, onClick} = props;
  return (
    <TouchableOpacity
      onPress={() => {
        onClick(id);
      }}>
      <View style={styles.list}>
        <View>
          <Image source={{uri: `${img}`}} style={styles.image} />
        </View>
        <View style={styles.name}>
          <Text style={styles.details} key={id}>
            {title}
          </Text>
          <Text>{year}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
