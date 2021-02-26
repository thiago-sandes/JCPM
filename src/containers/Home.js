import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// Actions
import {setDataAction} from '../redux/actions/dataAction';

// Styles
import styles from './styles/Home';

// Components
import SimpleSplash from '../components/SimpleSplash';
import Card from '../components/Card';

// API
import {getData} from '../api/api';

const Home = (props) => {
  const {data, navigation, setMovies} = props;

  const [splash, setSplash] = useState(true);
  const [searchTerm, setSearchTerm] = useState('Avenger');

  // Handle api call
  const handleApiCall = async () => {
    const response = await getData({s: searchTerm});

    if (response.Search != null) {
      setTimeout(() => {
        setMovies(response.Search);
        setSplash(false);
      }, 4000);
    }
  };

  const onSelectItem = () => {
    console.log('ok');
  };

  useEffect(() => {
    handleApiCall();
  }, [searchTerm]);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />

      {splash ? (
        <SimpleSplash />
      ) : data.movies ? (
        <ScrollView>
          <FlatList
            data={data.movies}
            keyExtractor={(item) => item.imdbID}
            renderItem={({item}) => (
              <Card
                title={item.Title}
                year={item.Year}
                img={item.Poster}
                id={item.imdbID}
                onSelectResult={onSelectItem}
              />
            )}
          />
        </ScrollView>
      ) : (
        <View style={styles.error}>
          <Text>No results found</Text>
        </View>
      )}
    </View>
  );
};

const mapStateToProps = (state) => {
  const {dataReducer} = state;

  return {
    data: dataReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMovies: bindActionCreators(setDataAction, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
