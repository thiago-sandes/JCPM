import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// Styles
import styles from './styles/Details';

const Details = (props) => {
  return (
    <>
      <View style={styles.body}>
        <TouchableOpacity onPress={() => console.log('ok')}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Step One</Text>
            <Text style={styles.sectionDescription}>
              Edit <Text style={styles.highlight}>App.js</Text> to change this
              screen and then come back to see your edits.
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Details;
