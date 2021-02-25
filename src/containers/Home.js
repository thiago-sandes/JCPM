import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';

import {connect} from 'react-redux';

// Styles
import styles from './styles/Home';

// Components
import SimpleSplash from '../components/SimpleSplash';

const Home = (props) => {
  const {data, navigation} = props;

  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 4000);
  }, [data]);

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <SafeAreaView>
        {splash ? (
          <SimpleSplash />
        ) : (
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            <View style={styles.body}>
              <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                <View style={styles.sectionContainer}>
                  <Text style={styles.sectionTitle}>Step One</Text>
                  <Text style={styles.sectionDescription}>
                    Edit <Text style={styles.highlight}>App.js</Text> to change
                    this screen and then come back to see your edits.
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
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
