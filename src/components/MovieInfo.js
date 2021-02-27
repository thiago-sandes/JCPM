import React from 'react';
import {View, Text, Image} from 'react-native';

// Styles
import styles from './styles/MovieInfo';

const MovieInfo = (props) => {
  const {details} = props;
  return (
    <>
      <View style={styles.header}>
        <View style={styles.shadow}>
          <Image source={{uri: `${details.Poster}`}} style={styles.img} />
        </View>
        <Text style={styles.titleText}>{details.Title}</Text>
        <Text style={styles.releasedText}>{details.Released}</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.text}>
          <Text style={styles.boldText}>Gênero: </Text> {details.Genre}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.boldText}>Duração: </Text>
          {details.Runtime}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.boldText}>Sinopse: </Text>
          {details.Plot}
        </Text>
        <Text style={[styles.text, {fontWeight: 'bold'}]}>Avaliação:</Text>
        {details.Ratings[0] && (
          <Text style={styles.text}>
            {details.Ratings[0].Source}: {details.Ratings[0].Value}
          </Text>
        )}
        {details.Ratings[1] && (
          <Text style={styles.text}>
            {details.Ratings[1].Source}: {details.Ratings[1].Value}
          </Text>
        )}
        {details.Ratings[2] && (
          <Text style={styles.text}>
            {details.Ratings[2].Source}: {details.Ratings[2].Value}
          </Text>
        )}
      </View>
    </>
  );
};

export default MovieInfo;
