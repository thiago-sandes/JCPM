import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, ScrollView} from 'react-native';

// API
import {getData} from '../api/api';

// Styles
import styles from './styles/Details';

// Components
import MovieInfo from '../components/MovieInfo';
import CustomizableButton from '../components/CustomizableButton';

const Details = ({route, navigation}) => {
  const {imdbID} = route.params;
  const [details, setDetails] = useState(null);

  // Handle API call
  const handleApiCall = async () => {
    const response = await getData({i: imdbID});
    setDetails(response);
  };

  // Handling lifecycle
  useEffect(() => {
    handleApiCall();
    return () => {
      setDetails(null);
    };
  }, []);

  if (details !== null) {
    return (
      <View style={styles.container}>
        <ScrollView>
          <MovieInfo details={details} />
          <CustomizableButton
            styles={styles.button}
            onPress={navigation.goBack}
          />
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
};

export default Details;
