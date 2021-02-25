import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';

import {connect} from 'react-redux';

// Styles
import styles from './styles/Home';

const Home = (props) => {
  const {data} = props;

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const mapStateToProps = (state) => {
  const {dataReducer} = state;

  return {
    data: dataReducer,
  };
};

export default connect(mapStateToProps)(Home);
