import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

// Styles
import styles from './styles/SimpleSplash';

const SimpleSplash = (props) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Carregando os dados...</Text>
      <ActivityIndicator
        style={styles.activityIndicator}
        size="large"
        color="#fff"
      />
    </View>
  );
};

export default SimpleSplash;
