import React from 'react';
import {View, Text} from 'react-native';

// Styles
import styles from './styles/SimpleSplash';

const SimpleSplash = (props) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Carregando os dados...</Text>
    </View>
  );
};

export default SimpleSplash;
